let btn = document.getElementById('btn');

// Add click event listener to the button
btn.addEventListener('click', function() {
  // Get the bill amount and tip percentage values from input fields
  let billAmount = parseFloat(document.getElementById('bill_amount').value);
  let tipPercentage = parseFloat(document.getElementById('tip_percentage').value);

  // Calculate tip amount and total bill
  let tipAmount = (billAmount * tipPercentage) / 100;
  document.getElementById('tip_amount').value = tipAmount.toFixed(2);
  document.getElementById('total_bill').value = (billAmount + tipAmount).toFixed(2);
});



