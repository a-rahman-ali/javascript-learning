function createImage() {
    var pic = document.createElement("img");
    pic.width = "100";
    pic.height = "100";
    pic.border = "2";
    pic.src = "../DOM Hierarchy.png";

    document.querySelector("div").appendChild(pic);
}
