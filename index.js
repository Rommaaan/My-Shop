import state, { saveState } from './state.js'

//Массив
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
    },
    {
        name: 'Бананы',
        type: 'Кавендиш', 
        description: 'Самые жёлтые и сочные',
        price: 52,
        origin: 'Китай, Хайнань',
        image_url: 'src/images/banana.jpg',
    },
    {
        name: 'Драгон фрукт',
        type: 'Белая питахайя', 
        description: 'Сочный, самый вкусный и очень сладкий',
        price: 115,
        origin: 'Юго-Восточная Азия, Вьетнам',
        image_url: 'src/images/dragon_fruit.jpg',
    },
    {
        name: 'Слива',
        type: 'Богатырская', 
        description: 'Очень вкусные и с маленькими косточками',
        price: 67,
        origin: 'Россия, Калуга',
        image_url: 'src/images/plum.jpg',
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
        state.total++
        state.items.push(product)
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