import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBX31yNFiAA3-NcgxByLO3Ve1xDSqBhALY",
    authDomain: "naruto-quizz.firebaseapp.com",
    databaseURL: "https://naruto-quizz.firebaseio.com",
    projectId: "naruto-quizz",
    storageBucket: "naruto-quizz.appspot.com",
    messagingSenderId: "712472165018",
    appId: "1:712472165018:web:4aa21a659f4b353b04bd23"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    // inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // déconnexion
    signoutUser = () => this.auth.signOut()

    // récupérer mot de passe
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

    user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase