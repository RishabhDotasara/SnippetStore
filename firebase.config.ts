// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRVTIuBpsRkU6f3W07X0Cn1rdn-sHAvxs",
  authDomain: "snippetstore-b9bd5.firebaseapp.com",
  projectId: "snippetstore-b9bd5",
  storageBucket: "snippetstore-b9bd5.firebasestorage.app",
  messagingSenderId: "250115423775",
  appId: "1:250115423775:web:91f4188a971356ef28df2a",
  measurementId: "G-VM5SKD0XDL"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider()

export {auth, githubProvider, signInWithPopup}