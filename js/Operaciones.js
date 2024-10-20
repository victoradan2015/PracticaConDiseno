const selectFrom = document.getElementById("currency-from");
const selectTo = document.getElementById("currency-to");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");

let divisasData = {};

function populateSelect(selectElement, divisas) {
    divisas.forEach(divisa => {
        const option = document.createElement("option");
        option.value = divisa.codigo;
        option.dataset.value = parseFloat(divisa.valor.replace('$', ''));
        option.textContent = `${divisa.nombre} (${divisa.valor})`;
        selectElement.appendChild(option);
    });
}

function convertCurrency() {
    const fromValue = parseFloat(selectFrom.selectedOptions[0].dataset.value);
    const toValue = parseFloat(selectTo.selectedOptions[0].dataset.value);
    const amount = parseFloat(amountInput.value);
    
    if (!isNaN(amount) && fromValue && toValue) {
        const result = (amount * toValue) / fromValue;
        resultDisplay.textContent = result.toFixed(2);
    }
}

fetch('./jsons/TiposCambios.json')
    .then(response => response.json())
    .then(data => {
        divisasData = data.divisas;
        populateSelect(selectFrom, divisasData);
        populateSelect(selectTo, divisasData);
        
        selectFrom.selectedIndex = 0;
        selectTo.selectedIndex = 1;
        
        amountInput.addEventListener("input", convertCurrency);
        selectFrom.addEventListener("change", convertCurrency);
        selectTo.addEventListener("change", convertCurrency);
    })
    .catch(error => console.error('Error fetching divisas:', error));