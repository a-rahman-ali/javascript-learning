var categories = ["All", "Electronics", "Footwear"];
// categories.push("Fashion", "Men's Clothing");
// categories.unshift("Fashion", "Men's Clothing");
categories.splice(1, 0, "Fashion", "Men's Clothing");
for (var category of categories) {
    document.write(category + "<br>");
}

categories.pop()
