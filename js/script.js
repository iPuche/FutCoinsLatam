document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navbarUL = document.querySelector('.navbar ul');
  
    menuButton.addEventListener('click', function() {
      navbarUL.classList.toggle('active');
    });
  });
  