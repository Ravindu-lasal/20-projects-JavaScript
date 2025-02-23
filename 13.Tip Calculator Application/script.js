function calculateTip(){

    const billAmountinput = document.getElementById("billamount");
    const serviceratingSelect = document.getElementById("serviceRating");
    const splitcount = document.getElementById("splitCount");
    const mealtype = document.getElementById("mealtype");

    const tipamounto = document.getElementById("tipAmount");
    const totalamounto = document.getElementById("totalAmount");
    const amountperpersono = document.getElementById("amountperperson");

    const billAmount = parseFloat(billAmountinput.value);
    const serviceRating = parseFloat(serviceratingSelect.value);
    const splitCount = parseFloat(splitcount.value);
    const mealtypes = mealtype.value;

    if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
        tipamounto.textContent = "Please enter valid values";
        totalamounto.textContent = "";
        amountperpersono.textContent = "";
        return;
    }

    let tip;
    switch(serviceRating){
        case 1:
            tip = billAmount * 0.05;
            break;
        case 2:
            tip = billAmount * 0.10;
            break;
        case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
    }

    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount / splitCount;

    if(mealtypes === "dinner"){
        tip += 5;
        totalAmount +=5;
        amountPerPerson +=5;
    }

    tipamounto.textContent = `Tip: $${tip.toFixed(2)}`;
    totalamounto.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    amountperpersono.textContent = `Amount per person: $${amountPerPerson.toFixed(2)}`;
    

console.log("Calculate Tip...");
}

document.getElementById("calculator").addEventListener("click", calculateTip);
