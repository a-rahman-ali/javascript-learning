function verifyCookies() {
    let msg;
    if (navigator.cookieEnabled) {
        msg = "Cookies are enabled... You can Continue " + navigator.language + " " + navigator.platform;
    } else {
        msg = "Cookies are disabled - Please Enable";
    }
    document.getElementById("msg").innerHTML = msg;
}
