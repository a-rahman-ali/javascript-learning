function loginClick() {
    var username = document.getElementById("txtName").value;
    var password = document.getElementById("txtPwd").value;

    fetch("07_users.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            for (var user of users) {
                if (user.UserName === username && user.Pwd === password) {
                    // document.getElementById("msg").innerHTML = "Login Success";
                    document.write("Login Success");
                } else {
                    document.getElementById("msg").innerHTML = "Invalid Username / Password";
                }
            }
        })
}
