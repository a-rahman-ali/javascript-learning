var userDetails = {
    Email: "john@gmail.com",
    Mobile: "+919876543210",
    Password: "john@123"
}
var flag = "";
function continueClick() {
    var user = document.getElementById("txtUser").value;
    var userError = document.getElementById("userError");
    var userContainer = document.getElementById("userContainer");
    var password = document.getElementById("txtPassword").value;
    var passwordError = document.getElementById("passwordError");
    var passwordContainer = document.getElementById("passwordContainer");

    if (user == userDetails.Email) {
        flag = `Login success and notification sent to your email ${user}`;
        userContainer.style.display = "none";
        passwordContainer.style.display = "block";
    }
    else if (user == userDetails.Mobile) {
        flag = `Login success and OTP sent to ${user}`;
        userContainer.style.display = "none";
        passwordContainer.style.display = "block";
    }
    else {
        userError.innerHTML = "Invalid email or Mobile".fontcolor("red");
    }
}
function loginClick() {
    var password = document.getElementById("txtPassword").value;
    var passwordError = document.getElementById("passwordError");

    if (password == userDetails.Password) {
        document.write(`<h1>${flag}</h1>`);
    }
    else {
        passwordError.innerHTML = "Invalid Password".fontcolor("red");
    }
}
