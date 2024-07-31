var link = "<a href='home.html'>Home</a>";
var newLink = "<a href='about.html'>About</a>";
document.write(link + "<br>" + newLink);
document.write("<br>");

var username = "John";
var age = 20;
var msg1 = "Hello!" + " " + username + " " + "You will be" + " " + (age + 1) + " " + "Next Year";
var msg2 = `Hello! ${username} You will be ${age + 1} Next Year`;
document.write(msg1);
document.write("<br>");
document.write(msg2);
document.write("<br>");

var title = "User Login";
var login = `
        <h2>${title}</h2>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text"></dd>
            <br>
            <dt>Password</dt>
            <dd><input type="password"></dd>
            <br>
            <button>${title}</button>
        </dl>
    `;
document.write(login);
document.write("<br>");
