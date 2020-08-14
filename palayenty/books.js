// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaf8_vF3jIzxa--TWosgP31SixnZ0FHFk",
    authDomain: "library-f5e2c.firebaseapp.com",
    databaseURL: "https://library-f5e2c.firebaseio.com",
    projectId: "library-f5e2c",
    storageBucket: "library-f5e2c.appspot.com",
    messagingSenderId: "460055008373"
  };
  firebase.initializeApp(config);

  $(document).ready( function () {

    var rootRef = firebase.database().ref().child("Books");

    rootRef.on("child_added", snap => {

        var bookId = snap.child("BookID").val();
        var bookTitle = snap.child("BookTitle").val();

        $("#table_body").append("<tr><td>" + bookId +"</td><td>" + bookTitle +
        
        "</td></tr>");

    });

    $('#table_id').DataTable();

    //deleting data

    
} );