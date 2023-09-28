/**
 * 
 *      ---------------------
 *          Initial instal
 *      ---------------------
 * 
 * 1. visit: console.firebase.google.com
 * 2. create project(skip google analytics)
 * 3. Resister app(create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to publish by pushing those to github
 *        -----------------
 *            Integration
 *        ------------------
 * 7. Go to Docs > Build > Authentication > web > get started 
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 *         -------------------
 *           Provider setup
 *         -------------------
 * 
 * 11. import googleAuthProvider and create and a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. active sing in method (googl, facebook, github etc)
 * 
 * 
 * ---------------
 * more auth provider
 * ------------------
 * 
 * 1. active the auth provider(crate app, provider redirect url, client id, client secret )
 * 2. 
 */