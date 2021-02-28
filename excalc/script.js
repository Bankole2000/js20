// https://v6.exchangerate-api.com/v6/c1ab112acddcb4ce094243d8/latest/USD - endpoint.
const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
let amountEl_one = document.getElementById('amount-one')
let amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM


// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('change', calculate);
swap.addEventListener('click', ()=>{
  const temp = currencyEl_one.value; 
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
})
function calculate(){
  console.log('Ran');
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEl_two.value;

  console.log({currencyOne, currencyTwo}); 
  fetch(`https://v6.exchangerate-api.com/v6/c1ab112acddcb4ce094243d8/latest/${currencyOne}`)
  .then(res => res.json())
  .then(data =>{
    console.log({data})
    const {conversion_rates: rates} = data;
    console.log({rates})
    rate = rates[currencyTwo];
    rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
    amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
  });
}

calculate();

// fetch(`https://someapi.com/${endpoint}`)
//   .then(res => res.json())
//   .then(data => {
//     // You can assign new variable names in destructuring
//     const {apis_really: really, should_use: use, better_names: names} = data
//     // i.e really = apis_really, use = should_use, names = better_names
//     console.log({really, use, names})
//     // Do whatever else here
//   })
