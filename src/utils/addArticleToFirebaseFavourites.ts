import { Article } from "../types/article";
import { ImportedArticle } from "../types/importedArticle";
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { convertArticleWithUserIdAndUUID } from "./convertArticleWithUserIdAndUUID";

const addArtoicleToFirebaseFavourites = async (article: Article, userID: string): Promise<ImportedArticle | null> => {
    const db = getFirestore();
    const articleWithUserId = convertArticleWithUserIdAndUUID(article, userID ?? "")
    try {
        const docRef = await addDoc(collection(db, "favourites"), articleWithUserId);
        console.log("Document written with ID: ", docRef.id, 'uuid', articleWithUserId.uuid);
        return {... articleWithUserId, ref: docRef.id}
    } catch (e) {
        console.error("Error adding document: ", e);
        return null
    }
}

export default addArtoicleToFirebaseFavourites;