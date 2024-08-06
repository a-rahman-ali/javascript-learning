function loadProduct(id) {
    fetch(`http://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("imgProduct").src = data.image;
            document.getElementById("lblTitle").innerHTML = data.title;
            document.getElementById("lblPrice").innerHTML = `$ ${data.price}`;
            // document.getElementById("lblRating").innerHTML = `${data.rating.rate} * [${data.rating.count}]`;
        })
}
function bodyLoad() {
    loadProduct(1);
}
var count = 1;
function next() {
    count++;
    loadProduct(count);
}
function prev() {
    if (count > 1) {
        count--;
    }
    // if(count == 1){
    //     document.getElementById("lblPrev").disabled = true;
    // }
    loadProduct(count);
}
