const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productCartList = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleProductCartList);

function toggleMenu() {
    const isCartClosed = productCartList.classList.contains('inactive');

    if (!isCartClosed) {
        productCartList.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartClosed = productCartList.classList.contains('inactive');

    if (!isCartClosed) {
        productCartList.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductCartList() {
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed= desktopMenu.classList.contains('inactive');

    if (!isMobileClosed || !isdesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    } 
    
    productCartList.classList.toggle('inactive');

}