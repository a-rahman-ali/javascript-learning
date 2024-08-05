var products = [];
var product = { Name: '', Price: 0 };
function loadProducts() {
    document.querySelector("tbody").innerHTML = "";
    for (var item of products) {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        var tdPrice = document.createElement("td");
        var tdDelete = document.createElement("td");

        tdName.innerHTML = item.Name;
        tdPrice.innerHTML = item.Price;
        tdDelete.innerHTML = `
            <button onclick="deleteClick(${item.Name})">X</button>
        `;

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdDelete);
        document.querySelector("tbody").appendChild(tr);
    }
}
function addClick() {
    product = {
        Name: document.getElementById("txtName").value,
        Price: parseFloat(document.getElementById("txtPrice").value)
    };
    products.push(product);
    alert("Product Added");
    loadProducts();
    document.getElementById("txtName").value = "";
    document.getElementById("txtPrice").value = "";
}

function deleteClick(name) {

}

