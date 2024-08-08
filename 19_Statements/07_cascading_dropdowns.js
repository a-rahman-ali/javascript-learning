var categories = ["Select a Category", "Electronics", "Footwear", "Fashion"];
var electronics = ["Select Electronics", "TVs", "Mobiles", "Speakers"];
var footwear = ["Select Footwear", "Sneakers", "Shoes"];
var fashion = ["Select Fashion", "Men's Clothing", "Women's Clothing", "Kids' Clothing"];

var products = ["Select category 1st"];

function loadCategories() {
    for (var category of categories) {
        var option = document.createElement("option");
        option.text = category;
        option.value = category;

        document.getElementById("lstCategories").appendChild(option);
    }
}
function loadProducts() {
    document.getElementById("lstProducts").innerHTML = "";
    for (var product of products) {
        var option = document.createElement("option");
        option.text = product;
        option.value = product;
        document.getElementById("lstProducts").appendChild(option);
    }
}
function categoryChange() {
    var category = document.getElementById("lstCategories").value;
    products = [];
    switch (category) {
        case "Electronics":
            products = electronics;
            break;
        case "Footwear":
            products = footwear;
            break;
        case "Fashion":
            products = fashion;
            break;
        default:
            products = ["Please select a category"];
            break;
    }
    loadProducts();
}
function bodyLoad() {
    loadCategories();
    loadProducts();
}
