import { Article } from "../types/article"
import { v4 as v4 } from 'uuid';

export const convertArticleWithUserIdAndUUID = (article: Article, userId: string) => {
    return {
        ...article,
        userId,
        uuid: v4()
    }
}