function validate(title, ...userDetails) {
    document.write(`<h2>${title}</h2>`);
    var [password, success, failure] = userDetails;
    if (password == "admin") {
        success();
    } else {
        failure();
    }
}
validate("Validate User", "admin", function () {
    document.write("Login success");
}, function () {
    document.write("Invalid password");
});
