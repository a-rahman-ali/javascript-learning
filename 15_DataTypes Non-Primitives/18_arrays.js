// Example-1
var values = new Array();
values[0] = 10;
values["1"] = true;
values[2] = "a";
values["3"] = "John";
values[4] = 20;

document.write(values);
document.write("<br><br>");

for (var property in values) {
    document.write(`${property} [${typeof property}] - ${values[property]} [${typeof values[property]}] <br>`);
}

// Example-2
document.write("<br><br>");
var arr = [10, "Tv", true, ["delhi", "hyd"], function () { document.write("Hello!") }];
document.write(arr[3][1] + "<br>");
// document.write(arr[4]()  + ",br>");
arr[4]();

// Example-3
document.write("<br><br>");
var categories = ["Electronics", "Footwear", "Fashion"];
document.write(categories.toString());
document.write("<br><br>");
document.write(categories.join("-->"));
document.write("<br><br>");
document.write(categories.slice(1, 2));
document.write("<br><br>");

var arr1 = [34000, 43200, 46000, 23000];
var foundValue = arr1.find(function (value) {
    return value > 40000;
});
document.write(foundValue);
document.write("<br><br>");
var filteredValues = arr1.filter(function (value) {
    return value > 40000;
});
document.write(filteredValues.toString());
document.write("<br><br>");

categories.map(function (value) {
    // document.write(`<h5>${value}</h5>`);
    document.write(`<li>${value}</li>`);
});



document.write("<br><br>");
