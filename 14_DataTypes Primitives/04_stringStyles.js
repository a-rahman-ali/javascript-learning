function verifyUser() {
    var userName = document.getElementById("userName").value;
    // document.getElementById("userName").value = user_name.toUpperCase();
    var userMsg = document.getElementById("userMsg");
    if (userName.length < 4) {
        userMsg.innerHTML = "Name too short";
        userMsg.style.color = "red";
    } else {
        userMsg.innerHTML = "Name verified...!";
        userMsg.style.color = "green";
        userMsg.style.fontWeight = "bold";
    }
}
function changeCase() {
    var user_name = document.getElementById("userName").value;
    document.getElementById("userName").value = user_name.toUpperCase();
}
