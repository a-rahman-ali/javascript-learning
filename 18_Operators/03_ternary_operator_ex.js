function toggleClick() {
    console.log("clicked");
    var pic = document.getElementById("pic");
    pic.style.display = (pic.style.display == 'block') ? 'none' : 'block';

    var btnToggle = document.getElementById("btnToggle");
    btnToggle.innerHTML = (btnToggle.innerHTML == 'Hide Image') ? 'Show Image' : 'Hide Image';
}
function changeStock() {
    var optStock = document.getElementById("optStock");
    var lblStock = document.getElementById("lblStock");

    lblStock.innerHTML = (optStock.checked == true) ? "In Stock" : "Out of Stock";

}
