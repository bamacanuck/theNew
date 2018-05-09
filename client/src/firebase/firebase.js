import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyCZtIRh1OQ8q_ySc2QWOeIoXsearNv9nbg",
    authDomain: "ganggreen-10c76.firebaseapp.com",
    databaseURL: "https://ganggreen-10c76.firebaseio.com",
    projectId: "ganggreen-10c76",
    storageBucket: "ganggreen-10c76.appspot.com",
    messagingSenderId: "574389336628",
};

const devConfig = {

    apiKey: "AIzaSyCZtIRh1OQ8q_ySc2QWOeIoXsearNv9nbg",
    authDomain: "ganggreen-10c76.firebaseapp.com",
    databaseURL: "https://ganggreen-10c76.firebaseio.com",
    projectId: "ganggreen-10c76",
    storageBucket: "ganggreen-10c76.appspot.com",
    messagingSenderId: "574389336628",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
