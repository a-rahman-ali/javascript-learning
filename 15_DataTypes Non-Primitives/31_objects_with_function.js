// var product = {
//     Name: "Nike Casuals",
//     Price: 4500.33,
//     Qty: 2,
//     Total: function(){
//         return this.Qty*this.Price;
//     },
//     Print:function(){
//         document.write(`Name = ${this.Name}<br>Price=${this.Price}<br>Qty=${this.Qty}<br>Total=${this.Total()}`)
//     }
// }
// product.Print();
var product = {
    Name: "",
    Price: 0,
    Qty: 0,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        document.write(`Name = ${this.Name}<br>Price=${this.Price}<br>Qty=${this.Qty}<br>Total=${this.Total()}`)
    }
}
product.Name = prompt("Enter the name of product: ");
product.Price = parseFloat(prompt("Enter the price: "));
product.Qty = parseInt(prompt("Enter the quantity: "));
product.Print();
