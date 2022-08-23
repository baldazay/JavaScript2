const products = [
    { id: 1, title: 'Nike Romaleos 4', price: 220, img: '../images/nike-sneakers.jpg' },
    { id: 2, title: 'PSG Strike Fourth', price: 40, img: '../images/psg.jpg' },
    { id: 3, title: 'Nike Elevated', price: 50, img: '../images/gym.jpg' },
    { id: 4, title: 'Premier League Flight', price: 150, img: '../images/ball.jpg' },
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj) => {
    return `<div class="product-item">
                <img src="${obj.img}"/>
                <h3>${obj.title}</h3>
                <p>${obj.price}</p>
                <button class="buy-btn btn btn-dark">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
