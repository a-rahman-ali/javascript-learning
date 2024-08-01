function verifyPassword() {
    var password = document.getElementById("txtPassword").value;
    var regExp = /(?=.*[A-Z,a-z])\w{6,10}/;
    if (password.match(regExp)) {
        document.querySelector("div").innerHTML = "Valid password format";
    } else {
        if (password.length < 6) {
            document.querySelector("div").innerHTML = "Enter atleast 6 characters";
        } else {
            document.querySelector("div").innerHTML = "Invalid password format";
        }
    }
}
