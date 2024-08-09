function openImage() {
    window.open("images/thumbnails/thumbnail-1.webp", "Meet with Sundar Pichai", "width=500 height=300");
}
function closeWindow() {
    if (confirm("Are you sure you want to close window?") == true) {
        window.close();
    } else {
        alert("Window is not closed");
    }
}
function printWindow() {
    window.print();
}
function openThumbnail() {
    window.open("images/thumbnails/thumbnail-2.webp", "Don't Laugh", "width=500 height=300");
}
