let over = document.getElementById('burger-click');
    burger = document.getElementById('burger');
    nav = document.getElementById('nav');

over.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active')
})