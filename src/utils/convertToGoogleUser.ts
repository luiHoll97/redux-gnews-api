import { GoogleUser } from "../types/googleUser";

export const convertToGoogleUser = (googleUserCredential: any): GoogleUser => {
    const googleUser = googleUserCredential.user;
    return {
        localId: googleUser.uid,
        email: googleUser.email,
        firstName: googleUser.displayName.split(' ')[0],
        lastName: googleUser.displayName.split(' ')[1],
        photoUrl: googleUser.photoURL,
        idToken: googleUser.accessToken,
    };
};