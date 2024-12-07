
let dailyRate = 35;
let daysSelected = [];
let calculatedCost = 0;

const mondayBtn = document.getElementById('monday');
const tuesdayBtn = document.getElementById('tuesday');
const wednesdayBtn = document.getElementById('wednesday');
const thursdayBtn = document.getElementById('thursday');
const fridayBtn = document.getElementById('friday');
const fullDayBtn = document.getElementById('full');
const halfDayBtn = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
function toggleDaySelection(day) {
    const dayBtn = document.getElementById(day);
    if (!dayBtn.classList.contains('clicked')) {
        dayBtn.classList.add('clicked');
        daysSelected.push(day);
    } else {
        dayBtn.classList.remove('clicked');
        daysSelected = daysSelected.filter(d => d !== day);
    }
    calculateTotalCost();
}

mondayBtn.addEventListener('click', () => toggleDaySelection('monday'));
tuesdayBtn.addEventListener('click', () => toggleDaySelection('tuesday'));
wednesdayBtn.addEventListener('click', () => toggleDaySelection('wednesday'));
thursdayBtn.addEventListener('click', () => toggleDaySelection('thursday'));
fridayBtn.addEventListener('click', () => toggleDaySelection('friday'));

/********* clear days *********/
clearButton.addEventListener('click', () => {
    daysSelected.forEach(day => {
        document.getElementById(day).classList.remove('clicked');
    });
    daysSelected = [];
    calculatedCost = 0;
    calculateTotalCost();
});

/********* change rate *********/
fullDayBtn.addEventListener('click', () => {
    dailyRate = 35;
    fullDayBtn.classList.add('clicked');
    halfDayBtn.classList.remove('clicked');
    calculateTotalCost();
});

halfDayBtn.addEventListener('click', () => {
    dailyRate = 20;
    halfDayBtn.classList.add('clicked');
    fullDayBtn.classList.remove('clicked');
    calculateTotalCost();
});

/********* calculate *********/
function calculateTotalCost() {
    calculatedCost = daysSelected.length * dailyRate;
    calculatedCostElement.textContent = calculatedCost.toFixed(0);
}