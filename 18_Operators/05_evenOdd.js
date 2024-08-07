function validate() {
    var num = document.getElementById("num").value;
    if (num % 2 == 0) {
        document.getElementById("msg").innerHTML = "Even number";
    } else {
        document.getElementById("msg").innerHTML = "Odd number";
    }
}
