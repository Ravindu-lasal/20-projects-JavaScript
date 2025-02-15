document.getElementById('Calculator').addEventListener('click', function(event) {
    event.preventDefault();
    calculationLoan();
});

function calculationLoan(){
    const loanAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value);
    const months = parseFloat(document.getElementById('months').value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(months)){
        alert('Please enter valid values');
        return;
    }

    const monthlyinterest = interestRate / 100 / 12;
    const totalPayment = months;
    const monthlyPayment = (loanAmount * monthlyinterest) / (1 - Math.pow(1 + monthlyinterest, -totalPayment));
    const totalInterest = (monthlyPayment * totalPayment) - loanAmount;

    displayResult(monthlyPayment, totalPayment, totalInterest);
}

function displayResult(monthlyPayment, totalPayment, totalInterest){
    document.getElementById('monthly-payment').innerHTML = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').innerHTML = totalPayment.toFixed(2);
    document.getElementById('total-interest').innerHTML = totalInterest.toFixed(2);
}