var categories = ["Electronics", "All", "Fashion", "Footwear"];
function loadCategories() {
    categories.sort();
    console.log(categories);

    document.getElementById("lstCategories").innerHTML = "";
    for (var category of categories) {
        var option = document.createElement("option");
        option.text = category;
        option.value = category;
        document.getElementById("lstCategories").appendChild(option);
        document.getElementById("txtCategory").value = "";
    }
}
function bodyLoad() {
    loadCategories();
}
function addCategory() {
    var categoryName = document.getElementById("txtCategory").value;

    if (categories.find(function (value) { return value.toLowerCase() == categoryName.toLowerCase() })) {
        alert(`${categoryName} already exists in the list!!`);
        loadCategories();
    }
    // if(categories.indexOf(categoryName) != -1){
    //     alert(`${categoryName} already exists in the list!!`);
    //     loadCategories();
    // }
    else if (categoryName.trim() == "") {
        alert("Empty field cannot be added");
        loadCategories();
    }
    else {
        categories.push(categoryName);
        alert(`${categoryName} added to the list `);
        loadCategories();
    }
}
function removeCategory() {
    var categoryName = document.getElementById("lstCategories").value;
    var categoryIndex = categories.indexOf(categoryName);
    var flag = confirm(`Are you sure\nYou want to delete ${categoryName} ?`);
    if (flag) {
        categories.splice(categoryIndex, 1);
        loadCategories();
    }
}
