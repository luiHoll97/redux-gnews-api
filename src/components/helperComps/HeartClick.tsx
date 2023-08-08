import Heart from 'react-animated-heart';
import { useState } from 'react';
import addArtoicleToFirebaseFavourites from '../../utils/addArticleToFirebaseFavourites';
import { Article } from '../../types/article';
import { addFavouriteArticle, deleteFavouriteArticles } from '../../features/favouriteArticlesSlice';
import { AppDispatch } from '../../app/store';
import { useAppDispatch } from "../../app/hooks";
import { ImportedArticle } from '../../types/importedArticle';

type ArticleTypes = Article | ImportedArticle;

interface Props {
    article: ArticleTypes;
    userID: string | undefined;
}

export const HeartClick = ({ article, userID }: Props) => {

    const [isClick, setClick] = useState(false);
    const dispatch: AppDispatch = useAppDispatch();

    const handleHeartClick = () => {
        setClick(!isClick);
        if (!isClick) {
            addArtoicleToFirebaseFavourites(article, userID ?? '')
                .then((docId) => {
                    if (docId) {
                        dispatch(addFavouriteArticle(docId));
                    }
                });
        }
        else {
                dispatch(deleteFavouriteArticles(article));
        }
    }

    return (
        <div>
            <Heart isClick={isClick} onClick={() => handleHeartClick()} styles={{ display: 'block' }} />
        </div>
    );
}