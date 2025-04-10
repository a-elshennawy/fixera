// navigationBar
const navigationBar = document.querySelector('.navigationBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navigationBar.classList.add('fixedNav');
    }
    else {
        navigationBar.classList.remove('fixedNav');
    }
});

// up button
const upBtn = document.querySelector('.upBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        upBtn.style.opacity = "1";
    }
    else {
        upBtn.style.opacity = "0";
    }
});

upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})