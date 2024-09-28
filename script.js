/*@ -0,0 +1,9 @@*/
// Adding scroll event to change nav-bar background color on scroll
window.addEventListener('scroll', function() {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});