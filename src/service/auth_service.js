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
}

export default AuthService;
