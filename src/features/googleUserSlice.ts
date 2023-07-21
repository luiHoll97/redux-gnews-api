import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { GoogleUser } from '../types/googleUser';

// Define a type for the slice state
export interface GoogleUserState {
    googleUser: GoogleUser | null;
    status: 'idle' | 'loading' | 'failed';
}

// Define the initial state using that type
const initialState: GoogleUserState = {
    googleUser: null,
    status: 'idle',
};

export const googleUserSlice = createSlice({
    name: 'googleUser',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setGoogleUser: (state: GoogleUserState, action: PayloadAction<GoogleUser | null>) => {
            const authToken = action.payload?.idToken ? action.payload?.idToken : '';
            sessionStorage.setItem('oauthToken', authToken)
            return {
                ...state,
                googleUser: action.payload,
            
            };
        },
    },
});

export const { setGoogleUser } = googleUserSlice.actions;

export const selectGoogleUser = (state: RootState) => state.googleUser.googleUser;

export default googleUserSlice.reducer;