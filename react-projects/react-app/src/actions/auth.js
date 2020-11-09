import { firebase, googleAuthProvider } from '../services/fire';

export const login = (user) => ({
    type: 'LOGIN',
    user
});
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};
export const logout = () => ({
    type: 'LOGOUT'
});
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
