import firebase from 'firebase';

// const config = {
//   apiKey : 'AIzaSyByVt7YWZjUyQkRg6p4mkcFDxGPFh-9MCU',
//   authDomain : 'pokemon-app-87f30.firebaseapp.com',
//   databaseURL : 'https://pokemon-app-87f30.firebaseio.com',
//   projectId : 'pokemon-app-87f30',
//   storageBucket : 'pokemon-app-87f30.appspot.com',
//   messagingSenderId : '858984257526'
// };

// firebase.initializeApp(config);

const config = {
  apiKey : 'AIzaSyBETDMEv2OnlTlP-nmuuPy9xieu_WwuzXg',
  authDomain : 'expensify-test-88d91.firebaseapp.com',
  databaseURL : 'https://expensify-test-88d91.firebaseio.com',
  projectId : 'expensify-test-88d91',
  storageBucket : 'expensify-test-88d91.appspot.com',
  messagingSenderId : '697055619526'
};
firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();
export { firebase, googleAuthProvider, database as default };
