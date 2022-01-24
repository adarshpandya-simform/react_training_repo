## Problem

### User management app

- Create a dummy project named “user-management-react-app” in react using any of the above methods - CRA or webpack from scratch.
- Setup redux architecture in the app.
- Add two routes using react-router-dom - /signup and /home
- /signup - page before login - UI should be as below:

- /home - page after login - UI should contain profile picture and the following text:
“Hello {Name}, you are registered with the email id - {Email} and phone number - {PhoneNo}”
Along with a logout button on the top right.

- Use Formik library for handling the following form validations:

    - Name: required, at least 15 char.
    - email: validate email convention,  required
    - phoneNo: Indian phone no. is only valid, required
    - password and confirm password should match and also
    - the image should be of type jpg or png, or less than 2Mb 

- On pressing submit, validate the entered form details and if valid, save user data to redux store.
- Then take the user to the “/home” route i.e. home page. There you need to show the logged-in user’s profile picture, name, email, phone number as discussed above.
- On the home page, when the user clicks on the logout button, reset the saved user data in the redux store and redirect the user to the signup page i.e. “/signup” route.
- If a user tries to access the home page without logging in, redirect to the signup page.
- If a user tries to access the signup page after logging in, redirect to the home page.