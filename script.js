let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
  calculation += value;

  displayCalculation();
}

function displayCalculation() {
  let text = document.querySelector('.js-calculation');
  text.innerHTML = calculation;
}