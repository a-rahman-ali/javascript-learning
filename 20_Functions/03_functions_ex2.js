function Details(id, name, price, stock) {
    document.write(`
        Id: ${id} <br>
        Name: ${name} <br>
        Price: ${price} <br>
        Stock: ${stock} <br>
    `);
}
// Details();
// Details(101, "TV", 45000, true);

function Details1(name, price) {
    if (name == undefined) {
        document.write("Price : " + price);
    } else if (price == undefined) {
        document.write("Name : " + name);
    } else {
        document.write(`Name : ${name} <br>Price : ${price} <br>`);
    }
}
// Details1("Samsung", 101);
// Details1(undefined, 101);
Details1("Samsung", undefined);

