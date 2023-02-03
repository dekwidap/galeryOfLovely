// Toggle Class Active For Side Navbar
const navbarNav = document.querySelector('.navbar-nav')

// When Hamburger Menu has been click
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

// Click outside sidebar to make dissaper the sidebar menu
const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})