function getPlugins() {
    // for(var i = 0; i < navigator.plugins.length; i++){
    //     document.write(navigator.plugins[i].name);
    //     document.write("<br/>");
    // }
    if (navigator.plugins["Chrome PDF Viewer"] == undefined) {
        alert("You don't have PDF Plugins installed");
        location.href = "http://www.adobe.com/in/downloads";
    } else {
        document.write("You can view PDF Documents");
    }
}
getPlugins();
