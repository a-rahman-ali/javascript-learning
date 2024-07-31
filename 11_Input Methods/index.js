function createClick() {
    foldername = prompt("Enter Folder Name: ", "New_Folder");
    if (foldername == null) {
        alert("You cancelled...");
    } else if (foldername == "") {
        alert("Please enter folder name");
    } else {
        document.querySelector("p").innerHTML += "Folder Created : " + foldername + "<br>";
    }
}
