import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDIAareOZeZyzP2-zNmcwUir5fflXixZ4",
    authDomain: "studisphere-93ca3.firebaseapp.com",
    projectId: "studisphere-93ca3",
    storageBucket: "studisphere-93ca3.appspot.com",
    messagingSenderId: "839245841871",
    appId: "1:839245841871:web:58dcd054c1c1673bb9beba",
    measurementId: "G-BB1P6F6S75"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Function to handle Google sign-in
function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log("Signed in user:", user);
      alert("Sign in successful!");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error("Sign-in error:", errorCode, errorMessage);
      alert("Sign in failed. Please try again.");
    });
}

// Function to handle Google sign-in button click
function handleGoogleSignIn(event) {
  event.preventDefault(); // Prevents the default behavior of the link
  signInWithGoogle();
}

// Get all elements with the class "social-icon-link" that have the "google" class
const googleSignInButtons = document.querySelectorAll(".social-icon-link.google");

// Add event listener to each Google sign-in button
googleSignInButtons.forEach((button) => {
  button.addEventListener("click", handleGoogleSignIn);
});

// You can also trigger the sign-in function from other events, like a form submission or other UI interactions
// For example:
// SomeElement.addEventListener("click", signInWithGoogle);

// If you want to trigger sign-in automatically when the page loads
// signInWithGoogle();
