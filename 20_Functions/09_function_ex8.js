function Hello() {
    return "Hello!";
}

var welcome = () => "Welcome ! <br>";
var userDetails = userName => `Hello ! ${userName} <br>`;

// document.write(welcome());
// document.write(userDetails("John"));

var printProducts = () => {
    fetch("http://fakestoreapi.com/products")
        .then(respomse => respomse.json())
        .then(data => {
            for (var item of data) {
                document.write(item.title + "<br>");
            }
        })
}
printProducts();