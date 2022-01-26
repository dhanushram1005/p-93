var firebaseConfig = {
      apiKey: "AIzaSyAeB4YUh57Hkp2NLdIBznmxJu4OFEcs-Vo",
      authDomain: "hero-stores.firebaseapp.com",
      databaseURL: "https://hero-stores-default-rtdb.firebaseio.com",
      projectId: "hero-stores",
      storageBucket: "hero-stores.appspot.com",
      messagingSenderId: "975814235518",
      appId: "1:975814235518:web:b25d9bd6cc6a2c73154f2f",
      measurementId: "G-MFDCHLXLWY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
