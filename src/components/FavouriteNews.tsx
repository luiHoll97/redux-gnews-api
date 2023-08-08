import { Box, Button, Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { ImportedArticle } from '../types/importedArticle';
import ImportedArticleCard from './helperComps/ImportedArticleCard';
import { selectFavouriteArticles } from '../features/favouriteArticlesSlice';
import { useAppSelector } from '../app/hooks';
import { selectGoogleUser } from '../features/googleUserSlice';
import { query, getFirestore, where, getDocs, collection } from 'firebase/firestore';


const FavouriteNews = (): JSX.Element => {

    const [news, setNews] = useState<ImportedArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [flicker , setFlicker] = useState(false);

    const currentUser = useAppSelector(selectGoogleUser)?? {localId: ''};
    const favouriteArticles = useAppSelector(selectFavouriteArticles);

    

    // using axios to fetch data from API
   const fetchFavouriteNews = async (): Promise<void> => {
    if (!currentUser) {
        return;
    }
    try {
        const q = query(
            collection(getFirestore(), "favourites"),
            where("userId", "==", currentUser.localId)
          );
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot);
            const favouriteNews: ImportedArticle[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data() as ImportedArticle;
                favouriteNews.push(data);
            }
            );
            setNews(favouriteNews);
            setLoading(false);
        
    } catch (error) {
        console.log('cant do it', error)
        
    }
   };

    useEffect(() => {
       fetchFavouriteNews();
    }, [favouriteArticles]);

    if (loading) {
        return (
            <Box mt={20} alignItems={'center'}>
                <Center>
                    <Spinner
                        thickness='5px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Center>
            </Box>
        );
    }

    return (
        <div>

            {news &&
            <Box>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {news.map((news: ImportedArticle) => (
                <ImportedArticleCard article={news} />
            ))}
            </SimpleGrid>
            </Box>
            }
        </div>
    );
}

export default FavouriteNews;