function clock() {
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    document.getElementById("date").innerHTML = now.toLocaleDateString();
}
function bodyLoad() {
    // clock();
    setInterval(clock, 1000);
    var date = new Date();
    // date.setHours(18);
    var hrs = date.getHours();

    var status = document.getElementById("status");
    if (hrs > 0 && hrs < 12) {
        status.innerHTML = "Good Morning";
    } else if (hrs > 12 && hrs < 17) {
        status.innerHTML = "Good Afternoon";
    } else if (hrs > 17 && hrs < 23) {
        status.innerHTML = "Good Evening";
    }
}
