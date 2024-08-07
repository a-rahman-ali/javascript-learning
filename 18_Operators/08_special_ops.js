var product = {
    Name: "TV",
    Price: 45004.53,
    Stock: true,
    Rating: { rate: 4.4, count: 1200 }
}
for (var property in product) {
    document.write(`${property} [${typeof property}] - ${product[property]} [${typeof product[property]}] <br>`);
}
document.write(`Name in Product ${"Name" in product}`);
