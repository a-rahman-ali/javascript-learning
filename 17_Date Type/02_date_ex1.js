var Name = "Nike Casuals";
var Price = 5600.55;
// var Mfd = new Date(); // Fetches current date and time
var Mfd = new Date("2024-05-29 14:30"); // Fetches current date and time

document.write(`Name = ${Name}<br>Price = ${Price}<br>Mfd=${Mfd}<br>`);
document.write(`Mfd=${Mfd.getFullYear()}<br>`);
document.write(`Mfd=${Mfd.getYear()}<br>`);

document.write(`Customized Date Format<br>`);
var mfdDate = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.write(`${weekdays[mfdDate.getDay()]} - ${mfdDate.getDate()}, ${months[mfdDate.getMonth()]} ${mfdDate.getFullYear()}<br>`);
