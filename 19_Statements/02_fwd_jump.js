var userDetails = {
    CardNumber: "4444555566667890",
    CVV: "2345",
    ExpiryDate: "2026"
}
function verifyCard() {
    var card = document.getElementById("txtCard").value;
    if (card == userDetails.CardNumber) {
        document.getElementById("txtCvv").disabled = false;
        document.getElementById("txtCvv").focus();
        // document.getElementById("txtCard").readOnly = true;
    }
    else {
        document.getElementById("btnPay").disabled = true;
    }
}
function verifyCVV() {
    var cvv = document.getElementById("txtCvv").value;
    if (cvv == userDetails.CVV) {
        document.getElementById("lstExpiry").disabled = false;
        document.getElementById("lstExpiry").focus();
    }
    else {
        document.getElementById("btnPay").disabled = true;
    }
}
function verifyExpiry() {
    var expiry = document.getElementById("lstExpiry").value;
    if (expiry == userDetails.ExpiryDate) {
        document.getElementById("btnPay").disabled = false;
        document.getElementById("btnPay").focus();
    }
    else {
        document.getElementById("btnPay").disabled = true;
    }
}
