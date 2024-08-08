function validate(password, success, failure) {
    if (password.length >= 8) {
        success();
    }
    else {
        failure();
    }
}

validate("1234567", function () {
    document.write("Login success");
}, function () {
    document.write("Invalid password");
});

validate("12345678", function () {
    document.write("Login success");
}, function () {
    document.write("Invalid password");
});
