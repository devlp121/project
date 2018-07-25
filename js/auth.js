firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    // [END_EXCLUDE]
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var uid = user.uid;
      var providerData = user.providerData;
      document.getElementById('sign-out-button').classList.remove("hide");


      // [END_EXCLUDE]
    } else {
      document.getElementById('sign-in-button').classList.remove("hide");
      document.getElementById('sign-out-button').classList.add("hide");


    }
    // [START_EXCLUDE silent]
    // [END_EXCLUDE]
  });
  
  function signOutUser(){
 firebase.auth().signOut().then(function() {
     console.log('User signed out');
    // Sign-out successful.
  }).catch(function(error) {
      console.log('An error happened');
    // .
  });   
} 


