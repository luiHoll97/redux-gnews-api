import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { convertToGoogleUser } from "../utils/convertToGoogleUser";
import { setGoogleUser } from "./googleUserSlice";
import { AppDispatch } from "../app/store";

export const connectGoogleUser = () => {
    return async (dispatch: AppDispatch) => {
        const auth = getAuth();
        try {
            const provider = new GoogleAuthProvider();
            const googleUserCredential = await signInWithPopup(auth, provider);
            const googleUser = convertToGoogleUser(googleUserCredential);
            dispatch(setGoogleUser(googleUser));
        } catch (error) {
            console.log('Error signing in with Google:', error);  
        }
    };
}

