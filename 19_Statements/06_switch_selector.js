function f1() {
    var x = parseInt(prompt("Enter a number : "));
    switch (x) {
        case 1:
            document.write(`You entered One`);
            break;
        case 2:
            document.write(`You entered Two`);
            break;
        case 3:
            document.write(`You entered Three`);
            break;
        default:
            document.write(`Please enter a number between 1 and 3`);
            break;
    }
}
// f1();

function f2() {
    var opt = prompt("Do you want to continue ?", "Y/N");
    switch (opt) {
        case "Y":
        case "y":
            document.write(`You entered Yes...`);
            break;
        case "N":
        case "n":
            document.write(`You entered No...`);
            break;
        default:
            document.write(`Please enter Y or N`);
            break;
    }
}
// f2();

function f3() {
    var opt = prompt("Do you want to continue ?", "Yes/No");
    switch (opt.toLowerCase()) {
        case "yes":
            document.write(`You entered Yes...`);
            break;
        case "no":
            document.write(`You entered No...`);
            break;
        default:
            document.write(`Please enter Y or N`);
            break;
    }
}
// f3();

function f4() {
    var x = parseInt(prompt("Enter a number : "));
    switch (true) {
        case x >= 1 && x <= 10:
            document.write(`Your number ${x} is between 1 and 10.`);
            break;
        case x > 10 && x <= 20:
            document.write(`Your number ${x} is between 10 and 20`);
            break;
        case x > 20 && x <= 30:
            document.write(`Your number ${x} is between 20 and 30`);
            break;
        default:
            document.write(`Your number ${x} is above 30 or 0 or -ve`);
            break;
    }
}
f4();
