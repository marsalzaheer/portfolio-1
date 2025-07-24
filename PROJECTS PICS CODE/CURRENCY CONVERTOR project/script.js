// Get references to DOM elements
const amountInput = document.querySelector('input[type="text"]');
const fromCurrencySelect = document.querySelector('select[name="from"]');
const toCurrencySelect = document.querySelector('select[name="to"]');
const messageDiv = document.querySelector('.msg');
const convertButton = document.querySelector('button');

// Set initial exchange rates
const exchangeRates = {
    USD: 300, // Example rate: 1 USD = 300 PKR
    PKR: 1,
    EUR: 350, // Example rate: 1 EUR = 350 PKR
    AUD: 200  // Example rate: 1 AUD = 200 PKR
};

// Function to perform the currency conversion
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Calculate the conversion
    if (!isNaN(amount)) {
        const rateFrom = exchangeRates[fromCurrency];
        const rateTo = exchangeRates[toCurrency];
        const convertedAmount = (amount / rateFrom) * rateTo;

        // Update the message div with the result
        messageDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        messageDiv.textContent = 'Please enter a valid amount.';
    }
}

// Add event listener to the button
convertButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    convertCurrency();
});
