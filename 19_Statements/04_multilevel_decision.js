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

    if (card == userDetails.CardNumber) {
        if (cvv == userDetails.CVV) {
            if (expiry == userDetails.ExpiryDate) {
                msg.innerHTML = "Payment Successful".fontcolor("green");
                document.getElementById("txtCard").value = "";
                document.getElementById("txtCvv").value = "";
                document.getElementById("lstExpiry").value = "";
            }
            else {
                msg.innerHTML = "Invalid Expiry Date".fontcolor("red");
            }
        }
        else {
            msg.innerHTML = "Invalid CVV".fontcolor("red");
        }
    }
    else {
        msg.innerHTML = "Invalid Card Number".fontcolor("red");
    }
}
