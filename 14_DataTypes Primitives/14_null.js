document.write("Null is the type defined for any reference that is expecting value during runtime. <br>");
document.write("If value is not supplied into a reference during run time then it returns \"null\". <br><br>");

var price = prompt("Enter the price: ");
if (price == null) {
    document.write("You cancelled.....<br>");
    document.write("Price Value has not been entered during runtime");
} else if (price == "") {
    document.write("Price Required but not entered")
} else {
    document.write(`Price = ${price}`);
}
