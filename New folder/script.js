function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.style.display = leftMenu.style.display === 'block' ? 'none' : 'block';
}

function adjustPageSize() {
    const width = window.innerWidth;

    if (width > 992 && width <= 1600) {
        document.body.style.transform = 'scale(0.9)';
        document.body.style.transformOrigin = 'top left';
    } else if (width > 700 && width <= 767) {
        document.body.style.transform = 'scale(0.8)';
        document.body.style.transformOrigin = 'top left';
    } else if (width > 600 && width <= 700) {
        document.body.style.transform = 'scale(0.75)';
        document.body.style.transformOrigin = 'top left';
    } else if (width <= 600) {
        document.body.style.transform = 'scale(0.5)';
        document.body.style.transformOrigin = 'top left';
    } else {
        document.body.style.transform = 'scale(1)';
        document.body.style.transformOrigin = 'top left';
    }
}

window.addEventListener('resize', adjustPageSize);
window.addEventListener('load', adjustPageSize);