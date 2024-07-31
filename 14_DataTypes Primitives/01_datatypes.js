// function submitClick(){
//     // var age = document.getElementById("txtAge").value;
//     var age = Number.parseInt( document.getElementById("txtAge").value);
//     document.write("You'll be " + (age+1) + " years old next year!");
// }
function submitClick() {
    var age = Number.parseInt(document.getElementById("txtAge").value);
    if (isNaN(age)) {
        document.write("Age must be a number!");
    } else {
        document.write("You'll be " + (age + 1) + " years old next year!");
    }
}
