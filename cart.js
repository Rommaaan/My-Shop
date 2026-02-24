const template = document.querySelector('#itemCart'); // Добавлен #
const cart = document.querySelector('.cart__list');   // Исправлено на cart__list

function createProduct() {
    const clone = template.content.cloneNode(true);
    const image = clone.querySelector('.item__image'); // Исправлено на item__image
    image.src = 'src/images/apple.jpg';

    const name = clone.querySelector('.item__name');
    name.textContent = 'Яблоко'

    const type = clone.querySelector('.item__type');
    type.textContent = 'Криппс Пинк'

    const price = clone.querySelector('#price');
    price.textContent = '15 руб/кг'

    const quantity = clone.querySelector('#quantity');
    quantity.textContent = '2'
    
    cart.appendChild(clone);

    

}

createProduct(); 