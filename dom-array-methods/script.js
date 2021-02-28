const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const showAllBtn = document.getElementById('show-all');
const sortBtn = document.getElementById('sort');
const sortDownBtn = document.getElementById('sort-down');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Format number as money
const formatAsMoney = (number) =>{
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// update the DOM 
const updateDOM = (providedData = data) => {
  // Clear the main div 
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`
  console.log({providedData, data})
  providedData.forEach((user, index) => {
    main.innerHTML += `<div class="person"><strong>${user.name}</strong> &#8358; ${formatAsMoney(user.money)}</div>`
  })
}

// add new user to data array
const addData = (newUser) => {
  data.push(newUser);
  updateDOM();
}

// Double Everyone's money
const doubleMoney = ()=>{
  data = data.map((user)=> {
    return {name: user.name , money: user.money * 2};
  });

  updateDOM();
}

// Sort by richest
const sortByRichest = () => {
  data.sort((a, b) => b.money - a.money);
  console.log('sorted descending');
  updateDOM();
}

// Sort by poorest 
const sortByPoorest = () =>{
  data.sort((a, b) => a.money-b.money);
  console.log('sorted ascending');
  updateDOM();
}

// Show only Millionaires
const showOnlyMillionaires = () => {
  filteredData = data.slice().filter(user => user.money > (10**6));
  updateDOM(filteredData);
}

// Calculate the total wealth 
const calculateWealth = () =>{
  const wealth = data.reduce((acc, user) => {
    return acc += user.money
  }, 0);
  console.log({wealth})

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3 style="padding: 10px">Total Wealth: <strong>${formatAsMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
}

// fetch random user and add money
const getRandomUser = async () =>{
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json();
  const user= data.results[0];
  const {first: firstname, last: lastname} = user.name;
  const name = `${firstname} ${lastname}`;
  const newUser = {name, money: Math.floor(Math.random() * (10 ** 6))}
  console.log({newUser});  
  addData(newUser);
}

getRandomUser();
getRandomUser();
getRandomUser();

// Event Listeners 
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
sortDownBtn.addEventListener('click', sortByPoorest);
showMillionairesBtn.addEventListener('click', showOnlyMillionaires);
showAllBtn.addEventListener('click', ()=> {updateDOM()});
calculateWealthBtn.addEventListener('click', calculateWealth);