import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDEUg1_K8EYFPiLl3mfpvrI-3nkoiefIjk",
  authDomain: "nba-full-25f41.firebaseapp.com",
  databaseURL: "https://nba-full-25f41.firebaseio.com",
  projectId: "nba-full-25f41",
  storageBucket: "nba-full-25f41.appspot.com",
  messagingSenderId: "336665000954",
  appId: "1:336665000954:web:8be24df2dadb4cd4a5c243"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];

  snapshot.forEach((childSnapshot) => {
      data.push({
          ...childSnapshot.val(),
          id: childSnapshot.key
      })
  });

  return data;
}

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
}