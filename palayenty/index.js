
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDzaFyCmOQb4XlNQO3zE8Kz64-HNSjybew",
    authDomain: "mavita-fcd2e.firebaseapp.com",
    databaseURL: "https://mavita-fcd2e.firebaseio.com",
    projectId: "mavita-fcd2e",
    storageBucket: "mavita-fcd2e.appspot.com",
    messagingSenderId: "4755222072"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
        //user is signed in 
        
        document.getElementById("welcome").style.display = "block";
        document.getElementById("login").style.display= "none";

        var user = firebase.auth().currentUser;
        if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "welcome " + email_id;
        }

    }else{
        //no user is signed in
        document.getElementById("login").style.display="block";
        document.getElementById("welcome").style.display="none";
    }
});

function login(){
    var userEmail = document.getElementById("username").value;
    var password = document.getElementById("passwd").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error:"+ errorMessage);
      });
}
function logout(){
    firebase.auth().signOut();
    document.getElementById("login").style.diplay="block";
}
