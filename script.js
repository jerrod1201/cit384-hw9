// Part 1: Date Display
// This section creates a Date object and formats it as MM/DD/YYYY so it can be displayed on the page.
document.addEventListener("DOMContentLoaded", function () {
  const todayDate = new Date();
  const month = String(todayDate.getMonth() + 1).padStart(2, "0");
  const day = String(todayDate.getDate()).padStart(2, "0");
  const year = todayDate.getFullYear();
  const formattedDate = `Today is ${month}/${day}/${year}`;
  document.getElementById("todayDate").textContent = formattedDate;

  // Part 2: Number Conversion and Validation
  // These variables are kept separate to match the assignment requirement.
  const originalValueOne = "42";
  const convertedValueOne = Number(originalValueOne);
  const isNaNOne = Number.isNaN(convertedValueOne);
  const isIntegerOne = Number.isInteger(convertedValueOne);

  const originalValueTwo = "19.75";
  const convertedValueTwo = Number(originalValueTwo);
  const isNaNTwo = Number.isNaN(convertedValueTwo);
  const isIntegerTwo = Number.isInteger(convertedValueTwo);

  const originalValueThree = "hello";
  const convertedValueThree = Number(originalValueThree);
  const isNaNThree = Number.isNaN(convertedValueThree);
  const isIntegerThree = Number.isInteger(convertedValueThree);

  const originalValueFour = "100";
  const convertedValueFour = Number(originalValueFour);
  const isNaNFour = Number.isNaN(convertedValueFour);
  const isIntegerFour = Number.isInteger(convertedValueFour);

  const numberResults = document.getElementById("numberResults");

  const buildNumberResult = function (value, converted, nanFlag, integerFlag) {
    let message = `Original value: "${value}" → Converted: ${converted} → isNaN: ${nanFlag} → isInteger: ${integerFlag}.`;

    if (nanFlag) {
      message += " This value is not a valid number.";
    } else if (integerFlag) {
      message += " This value is an integer.";
    } else {
      message += " This value is a decimal number.";
    }

    const resultLine = document.createElement("p");
    resultLine.textContent = message;
    return resultLine;
  };

  numberResults.appendChild(buildNumberResult(originalValueOne, convertedValueOne, isNaNOne, isIntegerOne));
  numberResults.appendChild(buildNumberResult(originalValueTwo, convertedValueTwo, isNaNTwo, isIntegerTwo));
  numberResults.appendChild(buildNumberResult(originalValueThree, convertedValueThree, isNaNThree, isIntegerThree));
  numberResults.appendChild(buildNumberResult(originalValueFour, convertedValueFour, isNaNFour, isIntegerFour));

  // Part 3A: Price Calculator
  // This part demonstrates how a shopping total can be calculated from a price, tax rate, and shipping cost.
  // The item price is read from the input, converted into a number, and then used in the subtotal.
  // Then the tax rate is divided by 100 so 7.5 becomes 0.075 before multiplying by the subtotal.
  // Shipping is only free when the subtotal reaches the threshold, which is why the message and total are updated together.
  const calculateButton = document.getElementById("calculateButton");
  const itemPriceInput = document.getElementById("itemPrice");
  const taxRateInput = document.getElementById("taxRate");
  const shippingCostInput = document.getElementById("shippingCost");
  const priceResults = document.getElementById("priceResults");

  const updatePriceResults = function () {
    const itemPrice = Number.parseFloat(itemPriceInput.value) || 0;
    const taxRate = Number.parseFloat(taxRateInput.value) || 0;
    const shippingCost = Number.parseFloat(shippingCostInput.value) || 0;

    const subtotal = itemPrice;
    const taxAmount = subtotal * (taxRate / 100);

    // Free shipping logic: if the cart subtotal is $50 or more, shipping is waived.
    let shippingFee = shippingCost;
    let shippingMessage = "Shipping was added to the total.";

    if (subtotal >= 50) {
      shippingFee = 0;
      shippingMessage = "You reached the free-shipping threshold!";
    } else if (shippingCost === 0) {
      shippingMessage = "There is no shipping cost for this order.";
    } else {
      shippingMessage = "You are still a little away from free shipping.";
    }

    const totalCost = subtotal + taxAmount + shippingFee;

    let taxMessage = "Sales tax was applied.";
    if (taxRate === 0) {
      taxMessage = "No sales tax was applied.";
    }

    const subtotalText = `Subtotal: $${subtotal.toFixed(2)}`;
    const taxText = `Tax (${taxRate.toFixed(2)}%): $${taxAmount.toFixed(2)}`;
    const shippingText = `Shipping: $${shippingFee.toFixed(2)}`;
    const totalText = `Estimated total: $${totalCost.toFixed(2)}`;

    priceResults.innerHTML = `
      <p class="highlight">${subtotalText}</p>
      <p>${taxText}</p>
      <p>${shippingText}</p>
      <p class="success">${totalText}</p>
      <p>${shippingMessage}</p>
      <p class="warning">${taxMessage}</p>
    `;
  };

  calculateButton.addEventListener("click", updatePriceResults);
  itemPriceInput.addEventListener("input", updatePriceResults);
  taxRateInput.addEventListener("input", updatePriceResults);
  shippingCostInput.addEventListener("input", updatePriceResults);

  updatePriceResults();
});
