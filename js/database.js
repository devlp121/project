var config = {
    apiKey: "AIzaSyCrYpkV8IGp0QhVnYxEkkBzlTkrZEBa4co",
    authDomain: "restaurapp-1531791507437.firebaseapp.com",
    databaseURL: "https://restaurapp-1531791507437.firebaseio.com",
    projectId: "restaurapp-1531791507437",
    storageBucket: "restaurapp-1531791507437.appspot.com",
    messagingSenderId: "924096817003"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();

function writeNewOrder(uid, username, picture, desc, body) {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: desc,
      starCount: 0,
      authorPic: picture
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }