let stag = document.querySelectorAll(".social");
let content = document.querySelectorAll('.con');

for (let i = 0; i < stag.length; i++) {
    stag[i].addEventListener('mouseover', () => {
        content[i].classList.remove('hide');
        content[i].classList.add('vis');
    });

    stag[i].addEventListener('mouseout', () => {
        content[i].classList.remove('vis');
        content[i].classList.add('hide');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeButton = document.getElementById('closeButton');

    hamburgerButton.addEventListener('click', function() {
        menuOverlay.style.display = 'block';
        document.querySelector('.menu').classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        menuOverlay.style.display = 'none';
        document.querySelector('.menu').classList.remove('active');
    });
});
  
