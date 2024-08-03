var categories = ["All", "Electronics", "Footwear", "Fashion", "Men's Clothing"];
for (var category of categories) {
    document.write(category + "<br>");
}

document.write("<br>");
// document.write(`pop() -- ${categories.pop()} <br>`);
// document.write(`shift() -- ${categories.shift()} <br>`);
document.write(`splice() -- ${categories.splice(1, 2)} <br>`);
for (var category of categories) {
    document.write(category + "<br>");
}
