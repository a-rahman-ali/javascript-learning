function bodyLoad() {
    var sect = document.querySelector("section");
    var para = document.createElement("p");
    para.textContent = "Hello ! Welcome to NareshIT";
    sect.appendChild(para);

    var fig = document.querySelector("figure");
    var pic = new Image();
    pic.width = "100";
    pic.height = "100";
    pic.border = "3";
    pic.src = "images/thumbnails/thumbnail-1.webp";
    fig.appendChild(pic);

    var cities = ["Hyd", "Bangalore", "Chennai", "Pune", "Mumbai", "Delhi"];
    var lstCities = document.getElementById("lstCities");
    for (var city of cities) {
        var option = document.createElement("option");
        option.text = city;
        option.value = city;
        lstCities.appendChild(option);
    }
    lstCities.style.backgroundColor = "cyan";
}
function removeElement() {
    lstCities.remove();
}
