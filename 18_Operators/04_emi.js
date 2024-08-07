function calculateEMI() {
    var P = parseInt(document.getElementById("txtAmount").value);
    var r = parseFloat(document.getElementById("txtRate").value) / 100 / 12;
    var n = parseInt(document.getElementById("txtYears").value) * 12;

    // emi = p * r / (1- (Math.pow(1/(1+r), n)))
    var emi = P * r / (1 - (Math.pow(1 / (1 + r), n)));
    // document.getElementById("result").innerHTML = `EMI Amount : &#8377; ${emi}`;
    document.getElementById("result").innerHTML = `EMI Amount : &#8377; ${Math.round(emi)}`;
}
