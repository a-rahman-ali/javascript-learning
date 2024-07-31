function bodyLoad() {
    document.querySelector("img").src = "../../DOM Hierarchy.png";
    document.getElementById("btnRegister").value = "Register";
    frmLogin.btnLogin.value = "Login";
    console.log("getElementsByTagName div - " + document.getElementsByTagName("div").length);
    console.log("getElementsByTagName form - " + document.getElementsByTagName("form").length);
    console.log("getElementsByTagName input - " + document.getElementsByTagName("input").length);
    console.log("getElementsByClassName btn - " + document.getElementsByClassName("btnLogin").length);
    console.log("getElementsByName pay - " + document.getElementsByName("pay").length);
}
