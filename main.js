function addUser(){
    username = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", username);
    window.location = "Let'sChat_Room.html";
}