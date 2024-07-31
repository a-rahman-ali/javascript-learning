function verifyUser() {
    var userName = document.getElementById("userName").value;
    // document.getElementById("userName").value = user_name.toUpperCase();
    var userMsg = document.getElementById("userMsg");
    if (userName.length < 4) {
        userMsg.innerHTML = "Name too short".fontcolor("red").italics();
    } else {
        userMsg.innerHTML = "Name verified...!".fontcolor('green').bold();
    }
}
function changeCase() {
    var user_name = document.getElementById("userName").value;
    document.getElementById("userName").value = user_name.toUpperCase();
}
