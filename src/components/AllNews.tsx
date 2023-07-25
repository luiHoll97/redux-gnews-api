import { Box, Center, HStack, Select, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '../types/article';
import { countries } from '../utils/countriesSelect';
import ArticleCard from './helperComps/ArticleCard';

const AllNews = (): JSX.Element => {

    const [country, setCountry] = useState('us');
    const [category, setCategory] = useState('general');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(10);
    const [language, setLanguage] = useState('en');

    const apikey = process.env.REACT_APP_GNEWS_API_KEY;
    const gNewsApiUrl = `https://gnews.io/api/v4/search?q=example&lang=${language}&country=${country}&max=${page}&apikey=${apikey}`;

    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

   

    // using axios to fetch data from API
    const fetchNews = async (): Promise<void> => {
        const response = await axios.get(gNewsApiUrl);
        setNews(response.data.articles);
        setLoading(false);
    };

    useEffect(() => {
       fetchNews();
    }, [language, country, page]);

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
            <Box>
                <HStack spacing={5} mb={10} mt={10}>
                    <Select
                        placeholder='Select Country'
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </Select>
                    <Select
                        placeholder={page.toString()}
                        onChange={(e) => setPage(parseInt(e.target.value))}
                    >
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                    </Select>
                    <Select
                        placeholder='Select Language'
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value='en'>English</option>
                        <option value='fr'>French</option>
                        <option value='de'>German</option>
                        <option value='it'>Italian</option>
                        <option value='es'>Spanish</option>
                    </Select>
                </HStack>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {news.map((news: Article) => (
                <ArticleCard article={news} />
            ))}
            </SimpleGrid>
            </Box>
        </div>
    );
}

export default AllNews;