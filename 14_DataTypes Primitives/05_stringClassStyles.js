function verifyUser() {
    var userName = document.getElementById("userName");
    var userMsg = document.getElementById("userMsg");
    if (userName.value.length < 4) {
        userMsg.innerHTML = "Name too short";
        userName.className = "invalid-style";
    } else {
        userMsg.innerHTML = "Name verified...!";
        userName.className = "valid-style";
    }
}
function changeCase() {
    var user_name = document.getElementById("userName").value;
    document.getElementById("userName").value = user_name.toUpperCase();
}
