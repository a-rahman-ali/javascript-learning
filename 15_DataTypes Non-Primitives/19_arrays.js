var categories = ["All", "Electronics", "Fashion", "Footwear"];
function bodyload() {
    for (var item of categories) {
        var li = document.createElement("li");
        li.innerHTML = item;
        document.querySelector("ol").appendChild(li);

        var option = document.createElement("option");
        option.text = item;
        option.value = item;
        document.querySelector("select").appendChild(option);
    }
}
