function getDetails() {
    document.getElementById("host").innerText = location.host;
    let msg;
    if (location.protocol == "http:") {
        msg = "You are using Live Web Server";
    } else {
        msg = "You are using File Server";
    }
    document.getElementById("protocol").innerHTML = location.protocol + "<br>" + msg;
    document.getElementById("url").innerText = location.href;
}
function gotoWindow() {
    location.href = "02_window_obj.html";
}
