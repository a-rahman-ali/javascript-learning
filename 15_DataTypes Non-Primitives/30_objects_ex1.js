var products = [
    { Name: "Samsung TV", Price: 5600.44 },
    { Name: "Lee Boots", Price: 3456.20 },
    { Name: "Nike Casuals", Price: 2865.34 }
];
function loadData() {
    for (var product of products) {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        var tdPrice = document.createElement("td");

        tdName.innerHTML = product.Name;
        tdPrice.innerHTML = product.Price;

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);

        document.querySelector("tbody").appendChild(tr);
    }
}
