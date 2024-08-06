var products = [];
function loadData() {
    fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            products = data;
        })
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
