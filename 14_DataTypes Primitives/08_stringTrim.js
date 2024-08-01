function verifyUser() {
    var userId = document.getElementById("txtUserId").value;
    if (userId.trim() == "john_nit") {
        document.write("User Verified");
    } else {
        document.querySelector("div").innerHTML = "Invalid UserId";
    }
}
