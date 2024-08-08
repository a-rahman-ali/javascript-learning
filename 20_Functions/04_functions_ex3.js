function printArray(list, title) {

    document.write(`<h2>${title}</h2>`);

    for (var item of list) {
        document.write(item + "<br>");
    }
}
printArray(["Electronics", "Footwear", "Fashion", "Accessories"], "Categories");
document.write("<hr>");

var products = ["TV", "Computer", "Watch", "Bike"];
printArray(products, "Products");
document.write("<hr>");

printArray(new Array("John", "Dave", "Doe"), "Names");
document.write("<hr>");



