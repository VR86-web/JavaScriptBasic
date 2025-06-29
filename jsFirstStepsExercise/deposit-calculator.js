function depositCalculator(amountDeposited, termOfDeposit, annualInterestRate){
    let accuredInterest = amountDeposited *(annualInterestRate / 100)
    let monthlyInterest = accuredInterest / 12
    let summe = amountDeposited + termOfDeposit * monthlyInterest;

    console.log(summe);

}

depositCalculator(200,3,5.7);
