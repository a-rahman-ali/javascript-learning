try {
    var x = parseInt(prompt("Enter the value of x : "));
    var y = parseInt(prompt("Enter the value of y : "));
    document.write("x = " + x + "<br>");
    document.write("y = " + y + "<br>");
    var z = x / y;
    if (y == 0) {
        throw "Divide by Zero Error: You can't divide by zero";
    }
    document.write("Division result  = " + z + "<br>");
}
catch (err) {
    document.write("Error : " + err.message + "<br>");
}
finally {
    alert("Program ended");
}
