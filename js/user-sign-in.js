const container = document.querySelector('.user-sign-in-container');

const loginContainer = document.querySelector('.form-box.login');

const registerContainer = document.querySelector('.form-box.register');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');


const btnPopup = document.querySelector('.login-btn');

const btnClose = document.querySelectorAll('.icon-close');

const buyOnlineButtons = document.querySelectorAll('.sign-btn'); // Select all "Buy Online" buttons

const viewButtons = document.querySelectorAll('.kallyas-button'); // Select all "View" buttons



registerLink.addEventListener('click', ()=> {
  container.classList.add('active');
  loginContainer.classList.add('active');
  registerContainer.classList.add('active');

  loginContainer.classList.remove('deactivate');
  registerContainer.classList.remove('deactivate');
});

loginLink.addEventListener('click', ()=> {
  container.classList.remove('active');
  loginContainer.classList.add('deactivate');
  registerContainer.classList.add('deactivate');

  loginContainer.classList.remove('active');
  registerContainer.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
  container.classList.add('active-popup');
  container.classList.remove('remove-popup');
});



btnClose.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    container.classList.add('remove-popup');
    container.classList.remove('active-popup');
  });
});


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 600) {
    container.classList.add('remove-popup');
    container.classList.remove('active-popup');
  }

  
});

buyOnlineButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action of the button
    container.classList.add('active-popup'); // Show the login popup
    container.classList.remove('remove-popup'); // Ensure the popup is visible
  });
});
/*
viewButtons.forEach((viewButton) => {
  viewButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action of the button
    container.classList.add('active-popup'); // Show the login popup
    container.classList.remove('remove-popup'); // Ensure the popup is visible
    // Optionally, you can add logic to populate the popup with specific content based on the button clicked
  });
});*/
