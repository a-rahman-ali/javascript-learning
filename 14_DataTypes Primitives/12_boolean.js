function changeLabel() {
    var optStock = document.getElementById("optStock");
    var lblCheckBox = document.getElementById("lblCheckBox");
    if (optStock.checked == true) {
        lblCheckBox.innerHTML = "Available";
    } else {
        lblCheckBox.innerHTML = "Out of Stock";
    }
}
function verifyCard() {
    var card = document.getElementById("txtCard").value;
    if (card == "4444555566667890") {
        document.getElementById("txtCvv").disabled = false;
        document.getElementById("txtCvv").focus();
    }
}
function verifyCVV() {
    var cvv = document.getElementById("txtCvv").value;
    if (cvv == "4321") {
        document.getElementById("btnPay").disabled = false;
    }
}
function changeLabel() {
    var optStock = document.getElementById("optStock");
    var lblCheckBox = document.getElementById("lblCheckBox");
    if (optStock.checked == true) {
        lblCheckBox.innerHTML = "Available";
    } else {
        lblCheckBox.innerHTML = "Out of Stock";
    }
}
function verifyCard() {
    var card = document.getElementById("txtCard").value;
    if (card == "4444555566667890") {
        document.getElementById("txtCvv").disabled = false;
        document.getElementById("txtCvv").focus();
    }
}
function verifyCVV() {
    var cvv = document.getElementById("txtCvv").value;
    if (cvv == "4321") {
        document.getElementById("btnPay").disabled = false;
    }
}
