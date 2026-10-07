import state, { saveState } from './state.js'

const template = document.querySelector('#itemCart'); // Добавлен #
const cart = document.querySelector('.cart__list');   // Исправлено на cart__list

const total = document.querySelector('#total')
total.textContent = state.total + ' шт';

const sum = document.querySelector('#sum')
sum.textContent = state.sum + ' pуб';

function createProduct(product) {
    const clone = template.content.cloneNode(true);
    const image = clone.querySelector('.item__image'); // Исправлено на item__image
    image.src = product.image_url

    const name = clone.querySelector('.item__name');
    name.textContent = product.name

    const type = clone.querySelector('.item__type');
    type.textContent = product.type

    const price = clone.querySelector('#price');
    price.textContent = product.price

    const quantity = clone.querySelector('#quantity');
    quantity.textContent = 1
    
    cart.appendChild(clone);
}

state.items.forEach((item) => createProduct(item)); 

const clearCart = document.querySelector('#clearCart')
clearCart.addEventListener('click', () => {
    state.total = 0;
    state.sum = 0;
    state.items = []

    saveState()

    cart.innerHTML = '';
    total.textContent = 0;
    sum.textContent = 0;
})
