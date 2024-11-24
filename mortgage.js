document.getElementById('calculate-mort').addEventListener('click', function () {
    // Get input values
    const loan_Amount = parseFloat(document.getElementById('loan-Amount').value);
    const interest_Rate = parseFloat(document.getElementById('interest-Rate').value) / 100 / 12;    
    const loan_Term = parseInt(document.getElementById('loan-Term').value) * 12; 
    const monthly_Income = parseFloat(document.getElementById('monthly-Income').value);
  
console.log(loan_Amount)
console.log(interest_Rate)
console.log(loan_Term)
console.log(monthly_Income)
    
    // Validate inputs
    if (isNaN(loan_Amount) || isNaN(interest_Rate) || isNaN(loan_Term) || isNaN(monthly_Income) || loan_Amount <= 0 || loan_Term <= 0 || monthly_Income <= 0) {
      alert('Please enter valid values for all fields.');
      return;
    }
  
    // Calculate monthly payment
    const numerator = loan_Amount * interest_Rate * Math.pow(1 + interest_Rate, loan_Term);
    const denominator = Math.pow(1 + interest_Rate, loan_Term) - 1;
    const monthly_Payment = numerator / denominator;
  
    // Check affordability
    const affordablelimit = monthly_Income * 0.3; 
    const isAffordable = monthly_Payment <= affordablelimit  ;
  
    // Display outputs
    document.getElementById('monthly-Payment').textContent = `Monthly Payment: $${monthly-Payment.toFixed(2)}`;
    document.getElementById('affordability').textContent = isAffordable
      ? 'This loan is affordable.'
      : 'This loan is NOT affordable. Monthly payment exceeds 30% of your income.';
    document.getElementById('affordability').style.color = isAffordable ? 'green' : 'red';
  });
  
