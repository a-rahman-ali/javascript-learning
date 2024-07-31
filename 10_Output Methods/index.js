function deleteClick() {
    console.warn("console.warn() deleteClick()")
    alert("Record will be Deleted");
}
function confirmClick() {
    if (confirm("Are you sure, Record will be DELETED....?")) {
        console.error("console.error() confirmClick() -> OK Clicked")
        alert("Record Deleted");
    } else {
        console.log("console.log() confirmClick() -> Cancel Clicked")
        alert("Record Still exists")
    }
}
function checkOut() {
    // document.write("<h2>Checkout clicked...</h2> <a href='10_index.html'>Back</a>");
    if (confirm("Do you want to proceed..?")) {
        // document.querySelector("h3").innerText = "Checkout here itself";
        // document.querySelector("h3").innerHTML = "<font color='red'>Checkout here itself</font>";
        document.getElementById("container").outerHTML = "<h2>Checkout here itself</h2>";
    } else {
        alert("Cancelled");
    }
}
