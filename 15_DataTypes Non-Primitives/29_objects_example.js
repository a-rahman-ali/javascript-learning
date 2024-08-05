var tv = {
    "Name": "Samsung",
    "Price": 24000.44,
    "Stock": true,
    "Cities": ["Delhi", "Hyd"],
    "Rating": { Rate: 4.5, Count: 5600 }
}
var shoe = {
    "Name": "Nike Casuals",
    "Price": 6000.34
}
document.write(`${tv.Name} <br>`);
console.log(tv);
console.log(shoe);
shoe.Price = 5400;
document.write(`Shoe Name : ${shoe.Name} -- Shoe Price : ${shoe.Price} <br>`);

var product = {
    "Name": "",
    "Price": 0,
    "Stock": false,
}
product.Name = prompt("Enter the name of the product : ");
product.Price = parseFloat(prompt("Enter the price of product : "));
product.Stock = (prompt("Enter Stock : ") == "true") ? true : false;
document.write(`Product Name : ${product.Name} <br>`);
document.write(`Product Price : ${product.Price} <br>`);
document.write(`Product Availability : ${product.Stock} <br>`);
