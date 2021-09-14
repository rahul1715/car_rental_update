
/*function initializeApp() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCQ3lfi2uB2RRMJ3Daxg9yReqD56RJoZiM",
    authDomain: "car-rental-7cedd.firebaseapp.com",
    projectId: "car-rental-7cedd",
    storageBucket: "car-rental-7cedd.appspot.com",
    messagingSenderId: "810181874661",
    appId: "1:810181874661:web:1e5d0f109184638470950c"
  };

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

function RegisterUser() {
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value; 
    var name=document.getElementById('name').value;  
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value; 
   
   
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
   //  var id =firebase.auth().currentUser.uid;
     alert('User Register successfully');
    // firebase.database().ref('Users/'+id).set({
      // fullname:name, 
       //subject:subject,
       //message:message,
       
    // });
   
    }).catch(function(error){
   
     var errorcode=error.code;
     var errormsg=error.message;
   
    });
       
   
  }
}*/


var firebaseConfig = {
  apiKey: "AIzaSyCnoIQhcwqRb4A39aMbJc-IMo_pUwNSi1I",
  authDomain: "login-data-bef96.firebaseapp.com",
  projectId: "login-data-bef96",
  storageBucket: "login-data-bef96.appspot.com",
  messagingSenderId: "253045774046",
  appId: "1:253045774046:web:6b5876a6bb616aead4944f"
};


    // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function RegisterUser() {
var email=document.getElementById('email').value;
var password=document.getElementById('password').value; 
var name=document.getElementById('name').value;  
// var city=document.getElementById('city').value; 


firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
var id =firebase.auth().currentUser.uid;
alert('User Register successfully');
firebase.database().ref('Users/'+id).set({
  fullname:name,
 
  
});

}).catch(function(error){

var errorcode=error.code;
var errormsg=error.message;

});
  
}


/*function LoginUser(){
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email,password).then(function(){


   var id=firebase.auth().currentUser.uid;

   window.location.replace("file:///C:/Users/Rahul/Desktop/KGE%20Technology/E-bike/backpage.html");
   localStorage.setItem('id',id);
   firebase.database().ref('Users/'+id).set({
    email:email,
    password:password,
    
    
  });
   
  }).catch(function(error){

   var errorCode=error.code;
   var errorMsg=error.message;

  });
 }  */