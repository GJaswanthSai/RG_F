import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqm5QK-VXfZZqGF3_FgZKMwPQEie3a_Ck",
  authDomain: "resume-builder-demo-7f29a.firebaseapp.com",
  projectId: "resume-builder-demo-7f29a",
  storageBucket: "resume-builder-demo-7f29a.appspot.com",
  messagingSenderId: "850143235156",
  appId: "1:850143235156:web:9f1b9b9b9b9b9b9b9b9b9b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };