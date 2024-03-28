# Table of Contents

1. [Introduction](#firebase-authentication-react-app)
2. [Hosted Link](#hosted-link)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Firebase Setup](#firebase-setup)
   - [Create a Firebase Project](#create-a-firebase-project)
   - [Set Up Authentication](#set-up-authentication)
   - [Firebase Configuration](#firebase-configuration)
   - [Initialize Firebase in Your App](#initialize-firebase-in-your-app)
   - [Implement Authentication](#implement-authentication)
6. [Running the Application](#running-the-application)
7. [Folder Structure](#folder-structure)
8. [Contributors](#contributors)

# Firebase Authentication React App

  - This is a simple React application demonstrating user authentication using Firebase Authentication. The application allows users to sign up, sign in, reset passwords,remember user, and sign out.

# [Hosted Link](https://firebase-auth-five-woad.vercel.app/)

## Features
  
   - Sign Up: Users can create a new account by providing their email address and password.
   - Sign In: Existing users can sign in using their registered email and password.
   - Remember Me: If user clcik on remember me no need of writing details every just take credentials.
   - Password Reset: Users can request a password reset email if they forget their password.
   - Sign Out: Signed-in users can sign out from their account.
   - Protected Routes: Certain routes are protected and can only be accessed by authenticated users.

### Technologies Used

   - React: The front-end of the application is built using React.js, a JavaScript library for building user interfaces.
   - Firebase Authentication: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
   - React Router: React Router is used for routing within the React application, enabling navigation between different components.
Firebase Setup


#### Firebase Setup

  - Create a Firebase Project: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
  - Set Up Authentication: In the Firebase Console, navigate to Authentication > Get Started and enable the authentication methods you want to use (e.g., Email/Password).
  - Firebase Configuration: Obtain the Firebase configuration object (firebaseConfig) by clicking on the gear icon next to "Project Overview" and selecting "Project Settings" > "General" > "Your apps" > "Firebase SDK snippet" > "Config". Copy this configuration into your project.
  - Initialize Firebase in Your App: In your React application, use the Firebase SDK to initialize Firebase with the configuration object.
  - Implement Authentication: Use Firebase Authentication methods (e.g., createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut) in your React components to handle authentication logic.

##### Running the Application

  - Clone this repository to your local machine.
  - Install dependencies using npm install.
  - Replace the placeholder Firebase configuration in src/firebase/firebase.js with your actual Firebase configuration obtained from the Firebase Console.
  - Run the application using npm start.
  - Access the application in your browser at http://localhost:3000.

###### Folder Structure

   - src/components: Contains React components for different pages (e.g., Sign In, Sign Up, Details).
   - src/firebase: Contains Firebase configuration and initialization.
   - src/App.js: Main component rendering the application.
   - src/index.js: Entry point of the application.


###### Contributors
    - [Amanulla_Iqbal_Mulla](https://github.com/Amanulla2022) 
    - [LinkedIn](https://www.linkedin.com/in/amanulla-mulla-000678232/)
