var categories = ["All", "Electronics", "Fashion", "Footwear"];

function loadCategories() {
    for (var category of categories) {
        var li = document.createElement("li");
        li.innerHTML = category;
        document.querySelector("ol").appendChild(li);

        var option = document.createElement("option");
        option.text = category.toUpperCase();
        option.value = category;
        document.querySelector("select").appendChild(option);

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = category;
        tr.appendChild(td);
        document.querySelector("tbody").appendChild(tr);

        var ulLi = document.createElement("li");
        ulLi.innerHTML = `<input type="checkbox"> ${category}`;
        document.querySelector("ul").appendChild(ulLi);
    }
}

