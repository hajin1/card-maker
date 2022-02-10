import firebase from 'firebase';
import firebaseApp from './firebase';

// 인증 관련 일을 하는 클래스
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        return firebaseApp.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseApp.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        });
    }
}

export default AuthService;
