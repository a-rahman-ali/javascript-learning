var menu = [
    { Category: "Electronics", Products: ["TV", "Mobile"] },
    { Category: "Footwear", Products: ["Nike", "UA"] }
]
function bodyLoad() {
    for (var item of menu) {
        var li = document.createElement("li");
        li.innerHTML = item.Category;
        document.querySelector("ol").appendChild(li);

        var optgroup = document.createElement("optgroup");
        optgroup.label = item.Category;
        document.querySelector("select").append(optgroup);

        for (var product of item.Products) {
            var ul = document.createElement("ul");
            var ulLi = document.createElement("li");

            ulLi.innerHTML = product;
            ul.appendChild(ulLi);
            ul.appendChild(ulLi);
            li.appendChild(ul);

            var option = document.createElement("option");
            option.text = product;
            option.value = product;
            optgroup.appendChild(option);
        }
    }
}
