document
	.getElementById("Calculate-mort")
	.addEventListener("click", function () {
		// Get input values
		const loanAmount = parseFloat(document.getElementById("loan-Amount").value);
		const interestRate =
			parseFloat(document.getElementById("interest-Rate").value) / 100 / 12;
		const loanTerm = parseInt(document.getElementById("loan-Term").value) * 12;
		const monthlyIncome = parseFloat(
			document.getElementById("monthly-Income").value
		);

		console.log(loanAmount);
		console.log(interestRate);
		console.log(loanTerm);
		console.log(monthlyIncome);

		// Validate inputs
		if (
			isNaN(loanAmount) ||
			isNaN(interestRate) ||
			isNaN(loanTerm) ||
			isNaN(monthlyIncome) ||
			loanAmount <= 0 ||
			loanTerm <= 0 ||
			monthlyIncome <= 0
		) {
			alert("Please enter valid values for all fields.");
			return;
		}

		// Calculate monthly payment
		const numerator =
			loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm);
		const denominator = Math.pow(1 + interestRate, loanTerm) - 1;
		const monthlyPayment = numerator / denominator;

		// Check affordability
		const affordablelimit = monthlyIncome * 0.3;
		const isAffordable = monthlyPayment <= affordablelimit;

		// Display outputs
		document.getElementById(
			"monthly-Payment"
		).textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
		document.getElementById("affordability").textContent = isAffordable
			? "This loan is affordable."
			: "This loan is NOT affordable. Monthly payment exceeds 30% of your income.";
		document.getElementById("affordability").style.color = isAffordable
			? "green"
			: "red";
	});
