var topics = new Map();
topics.set(1, "HTML");
topics.set("HTML", "It is a markup language");
topics.set("CSS", "It defines styles");

document.write(`${topics.get(1)} <br>`);
document.write(`${topics.get("HTML")} <br>`);

for (var key of topics.keys()) {
    document.write(`${key} <br>`);
}
for (var value of topics.values()) {
    document.write(`${value} <br>`);
}
for (var entry of topics.entries()) {
    document.write(`${entry} <br>`);
}

topics.delete("CSS");
if (topics.has("CSS")) {
    document.write(`${topics.get("CSS")} <br>`);
} else {
    document.write(`CSS Not Available <br>`)
}
