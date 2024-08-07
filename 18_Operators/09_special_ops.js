class Employee {

}
class Product {

}
let tv = new Product();
let sam = new Employee();

let details = new Array();

document.write(`TV is employee : ${tv instanceof Employee} <br>`);
document.write(`TV is product : ${tv instanceof Product} <br>`);
document.write(`Sam is employee : ${sam instanceof Employee} <br>`);
document.write(`Sam is product : ${sam instanceof Product} <br>`);

document.write(`TV is Object : ${tv instanceof Object} <br>`);
document.write(`Sam is Object : ${sam instanceof Object} <br>`);

document.write(`details is Array : ${details instanceof Array} <br>`);
document.write(`details is Object : ${details instanceof Object} <br>`);