class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Nike Romaleos 4', price: 220, img: '../images/nike-sneakers.jpg' },
            { id: 2, title: 'PSG Strike Fourth', price: 40, img: '../images/psg.jpg' },
            { id: 3, title: 'Nike Elevated', price: 50, img: '../images/gym.jpg' },
            { id: 4, title: 'Premier League Flight', price: 150, img: '../images/ball.jpg' },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //              block.innerHTML += item.render();
        }
    }

    getSum() {
        let cartPrice = 0;
        this.goods.forEach(item => {
            cartPrice += item.price;
        })
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="product-item">
                    <img src="${this.img}">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn btn btn-dark">Купить</button>
                </div>`
    }
}

class ShoppingCart {
    addToShopCart() { }
    removeFromShopCart() { }
    render() { }
}

class CartItem {
    render() { }
}

