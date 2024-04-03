const firebaseConfig = {
    apiKey: "AIzaSyDED48stgi08ZS48y6NmYxQj7JXyc_kS_U",
    authDomain: "letschat-96ede.firebaseapp.com",
    databaseURL: "https://letschat-96ede-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "letschat-96ede",
    storageBucket: "letschat-96ede.appspot.com",
    messagingSenderId: "51702485681",
    appId: "1:51702485681:web:f3313fd29846ce01d08890"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function Lct(){
  document.getElementById("pill").innerHTML = "";
  document.getElementById("pill").innerHTML = "<span style='margin: 0px; padding: 0px;'><a class='navbar-brand' href='#' style='margin: 0px; padding: 0px;'><img src='User.jpg' alt='Default image' width='30px' class='rounded-pill' style='margin: 0px;'></a></span><button id='logout' class='btn btn-outline-danger btn-small' onclick='logt()' style='font-family: Homemade Apple; font-size: 16px; float: right;'>Wanna Log Out</button>"
} 
function logt(){
  window.location  = "index.html";
} 
function Lco(){
  document.getElementById("pill").innerHTML = "";
  document.getElementById("pill").innerHTML = "<center><span style='margin: 0px; padding: 0px;'><a class='navbar-brand' href='#' style='margin: 0px; padding: 0px;'><img src='User.jpg' alt='Default image' width='30px' class='rounded-pill' style='margin: 0px;'></a></span><span style='margin: 0px; padding: 0px;'><h3 class='heading text-dark' style='font-family: Chakra Petch; margin: 0px;'><span class='heading text-dark' style='font-family: Chakra Petch; margin: 0px;' id='user_name'>jfakjdf</span></h3></span></center>";
}