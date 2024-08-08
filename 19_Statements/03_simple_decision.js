var userDetails = {
    CardNumber: "4444555566667890",
    CVV: "2345",
    ExpiryDate: "2026"
}
function payClick() {
    var card = document.getElementById("txtCard").value;
    var cvv = document.getElementById("txtCvv").value;
    var expiry = document.getElementById("lstExpiry").value;

    var msg = document.getElementById("msg");

    if (card == userDetails.CardNumber && cvv == userDetails.CVV && expiry == userDetails.ExpiryDate) {
        document.getElementById("msg").innerHTML = "Payment Successful";
    }
    else {
        document.getElementById("msg").innerHTML = "Payment Failed";
    }
}
