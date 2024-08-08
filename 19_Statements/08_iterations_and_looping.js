function f1() {
    fetch("http://fakestoreapi.com/products")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var item of data) {
                if (item.category == "jewelery" || item.category == "women's clothing") {
                    continue;
                }
                document.write(`<b>${item.category}</b> -- ${item.title} <br>`);
            }
        })
}
