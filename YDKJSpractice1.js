var bankAccountBalance = prompt("Enter your bank account balance, without using $");
var totalPrice = 0;
const TAX_RATE = 0.07;
const PHONE_PRICE = 250;
const ACCESSORY_PRICE = 15;
const SPENDING_THRESHOLD = 600;

//Round to 2 decimal places and add $.  Use at end.
function formatTotal(totalPrice) {
     return "$" + totalPrice.toFixed(2);
}

//Add Tax
function addTax(subTotal) {
    return subTotal * TAX_RATE;
}

//Buy the phone while you still have money
while (totalPrice <= bankAccountBalance) {
    totalPrice = totalPrice + PHONE_PRICE
    
    //Buy the accessory if you haven't spent too much
    if(totalPrice < SPENDING_THRESHOLD) {
        totalPrice = totalPrice + ACCESSORY_PRICE;
    }
}

totalPrice = totalPrice + addTax(totalPrice);
//Print grand total
console.log("Your grand total is " + formatTotal(totalPrice));

//Decide whether to buy or not
if (totalPrice <= bankAccountBalance) {
    formatTotal(totalPrice);
    console.log("You purchased " + totalPrice + " worth of phones and accessories");
} else {
    console.log("That's too much money!  Buy fewer phones.");
}

//This program always results in buying too many phones, as does does the example in the book.  This is a financially irresponsible program.