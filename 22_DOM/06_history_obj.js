function getHistoryCount() {
    // document.write("Total no. of pages in history: " + history.length);
    if (history.length > 3) {
        alert("You can view Max 3 pages - Please register to view more");
        location.href = "register.html";
    }
    else {
        document.write("You can view max 3 pages only");
    }
}
getHistoryCount();
