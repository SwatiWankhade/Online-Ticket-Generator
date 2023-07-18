const getTicket = document.getElementById('getTicket');
const fillInfo = document.getElementById('fillInfo');
const ticket = document.getElementById('ticket');

let date, fullName, age, number, email, address;

getTicket.addEventListener('click', () => {
  date = document.getElementById('date').value;
  fullName = document.getElementById('fullName').value;
  age = document.getElementById('age').value;
  number = document.getElementById('number').value;
  email = document.getElementById('email').value;
  address = document.getElementById('address').value;
  fillInfo.style.display = 'none';
  ticket.style.display = 'block';
});






