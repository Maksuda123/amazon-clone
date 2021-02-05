import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    const firebaseConfig = {
        apiKey: "AIzaSyBgZhqH4wgmXzzlIedBAL0n_bULA7o3zPk",
        authDomain: "clone-mila.firebaseapp.com",
        projectId: "clone-mila",
        storageBucket: "clone-mila.appspot.com",
        messagingSenderId: "637760104016",
        appId: "1:637760104016:web:931be9fbbee436442bd355",
        measurementId: "G-0Y59PY8F5M"
      };

})
const db = firebaseApp.firebase()
const auth = firebase.auth()
export{db, auth}