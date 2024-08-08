function printNumbersStatic() {
    for (var i = 0; i <= 10; i++) {
        document.write(i + "<br>");
    }
    document.write("<hr>");
}
printNumbersStatic();

function printNumbers(limit) {
    for (var i = 0; i <= limit; i++) {
        document.write(i + "<br>");
    }
    document.write("<hr>");
}
printNumbers(10);
printNumbers(20);
