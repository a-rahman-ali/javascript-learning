function verifyEmail() {
    var email = document.getElementById("txtEmail").value;
    var msg = document.getElementById("msg");
    if (email.indexOf("@") == -1) {
        msg.innerHTML = "Please include @ in email".fontcolor("red");
    } else {
        msg.innerHTML = "Valid email Format".fontcolor("green");
    }
}
