import state, { saveState } from './state.js'

const products = [
    {
        name: 'Яблоко',
        type: 'Криппс Пинк',
        description: 'Вкусные, сочные и свежие яблоки',
        price: 15,
        origin: 'Россия, Алма-Ата',
        image_url: 'src/images/apple.jpg',
    },
    {
        name: 'Апельсин',
        type: 'Салустиана', 
        description: 'Без косточек, сладкие и большие апельсины',
        price: 19,
        origin: 'Испания, Мадрид',
        image_url: 'src/images/orange.jpg',
    },
    {
        name: 'Арбуз',
        type: 'Сибирская роза', 
        description: 'Жёлтый внутри, сочный и огромный',
        price: 32,
        origin: 'Россия, Краснодарский край',
        image_url: 'src/images/watermelon.jpg',
    }
];

const template = document.querySelector('#productTemplate')
const catalog = document.querySelector('.catalog')

function createProduct(product) {
    const clone = template.content.cloneNode(true);

    const image = clone.querySelector('.product__img')
    image.src = product.image_url;

    const title = clone.querySelector('.product__title')
    title.textContent = product.name;

    const type = clone.querySelector('.product__type')
    type.textContent = 'Сорт: ' + product.type;

    const description = clone.querySelector('.product__description')
    description.textContent = product.description;

    const price = clone.querySelector('.product__price')
    price.textContent = product.price + ' p/кг';

    const origin = clone.querySelector('.product__origin')
    origin.textContent = 'Происхождение: ' + product.origin

    const button = clone.querySelector('.product__button')
    button.addEventListener('click', () => {
        alert(`Товар "${product.name}" добавлен в корзину`)
        state.sum += product.price
        saveState()
    })

    catalog.appendChild(clone)

}

products.forEach(product => createProduct(product))

// console.log('Привет Роман, как дела?')
// console.log('Привет Денис, как дела?')
// console.log('Привет Максим, как дела?')

// console.log('Пока Роман')
// console.log('Пока Денис')
// console.log('Пока Максим')

// function greet(name) {
//     console.log(`Привет \x1b[94m${name}\x1b[0m, как дела?`)
// }
// greet('Рома')
// greet('Максим')
// greet('Месси')