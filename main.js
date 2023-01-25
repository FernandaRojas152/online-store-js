const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productCartList = document.querySelector('.product-detail');
const cardContainer= document.querySelector('.cards-container');

const productList = [];

productList.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 120,
});

productList.push({
    name: 'Xiao',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/374e309d-713c-4ef2-b941-912bd95a5d52/deblqm8-4885280f-af38-41ef-9a32-9e6cc463de9c.png/v1/fill/w_1920,h_1600,strp/__xiao__render__by_stardustinqs_deblqm8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzM3NGUzMDlkLTcxM2MtNGVmMi1iOTQxLTkxMmJkOTVhNWQ1MlwvZGVibHFtOC00ODg1MjgwZi1hZjM4LTQxZWYtOWEzMi05ZTZjYzQ2M2RlOWMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.d1-eWOY8oZTGcy12ZsV3_4Z1wGRXZeEmVnJYx-EF5zI',
    price: 999,
});

productList.push({
    name: 'Venti',
    image: 'https://genshin.global/wp-content/uploads/2020/09/venti-anemo-character-genshin-impact.webp',
    price: 800,
});

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
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileClosed || !isdesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    productCartList.classList.toggle('inactive');

}

function renderProducts(arr){
    for (product of arr) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
        const price= document.createElement('p');
        price.innerText= "$"+ product.price;
    
        const name= document.createElement('p');
        name.innerText= product.name;
    
        productInfoDiv.append(price, name);
    
        const productInfoFigure= document.createElement('figure');
        const figureCart= document.createElement('img');
        figureCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(figureCart);
        
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardContainer.append(productCard);
    }
}

renderProducts(productList);