function Parent() {
    var x = 10;
    function Child() {
        var y = 20;
        return x + y;
    }
    // var result = Child() * 2;
    document.write(`Child() = ${Child()} <br>`);
    return Child() * 2;
}
document.write(`Parent() = ${Parent()} <br>`);
var result = Parent() * 2;
document.write(`result = ${result} <br>`);
