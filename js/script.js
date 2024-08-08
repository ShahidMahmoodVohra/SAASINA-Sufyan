
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

// code from pieces on 8/8/2024
document.getElementById('search-btn').addEventListener('click', function() {
    var searchForm = document.querySelector('.search-form');
    if (searchForm.style.display === 'none') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
});

document.getElementById('cart-btn').addEventListener('click', function() {
    var cartSummary = document.querySelector('.cart-summary');
    if (cartSummary.style.display === 'none') {
        cartSummary.style.display = 'block';
    } else {
        cartSummary.style.display = 'none';
    }
});







