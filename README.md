# Movie_App_Client_Side

This is my first App build with React. It allows the 'user' to register and login.From the login the Users gets a Token from the MovieApp Api saved on the Local Storage.
After a Login the User get a Display of Movies.
From there he can Click on the 'Moviecard' Buttons and display more Details, or he can view his own profile and update it.
He can also search for a Movies with a Filter and make a list of Favorite Movies wich gets Displayed on his Profile.

<img src="images\movieApp.PNG" alt="Screenshot" width="1200"/>

The App uses Routing and State Mangement to send the User to diffrent Pages(or 'views'). So for example when the User is not logged in. He cant acess any other site
besided the Login or Register Screen. The Navbar allows him to navigate to the Profile View and the Main View.

# Build with
- React
- React Redux
- React Boostrap
- React Router ver.5
- Npm
- Parcel
- Axios
- Scss
- Javascript
 - My own MovieApp Api https://github.com/FluffyderDelphin/Movie_App_Project
This sends and get send User and Movie Date between this Client Side App via Axios requests.
