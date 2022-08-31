const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                //                 console.log(data);
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn btn btn-dark">Купить</button>
                </div>
            </div>`
    }
}

class ShoppingCart {

    constructor(container = '.cart-items') {
        this.container = container;
        this.goodsInCart = [];
        this.totalPrice = 0;
        this._showShopCart();
        this._getCartItems()
            .then(data => {
                this.goodsInCart = data.contents;
                this.render();
            });
    }

    _showShopCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.shopping-cart').classList.toggle('hidden');
        });
    }

    addToShopCart() { }

    removeFromShopCart() { }

    _getCartItems() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const cartBlock = document.querySelector(this.container);
        this.goodsInCart.forEach(item => {
            cartBlock.insertAdjacentHTML('beforeend', new CartItem().render(item));
            this.totalPrice += item.price;
        });

        if (this.goodsInCart.length > 0) {
            document.querySelector('.shopping-cart-total').insertAdjacentHTML('beforeend',
                `<div class="shopping-cart-total ">
                <div class="shopping-cart-total-price-block">Итого <span class="shopping-cart-total-price">${this.totalPrice}</span>
                </div>
            </div>`);
        }
        /* else {
            document.querySelector('.shopping-cart-total').insertAdjacentHTML('beforeend', `<h2 class="empty-cart-text" > Ваша корзина пуста</h2>`)
        } */
    }
}

class CartItem {

    render(item, img = "https://via.placeholder.com/200x150") {
        return `<div class="shopping-cart-item">
        <div class="shopping-cart-item-img"><img src='${img}'/></div>
        <div class="shopping-cart-item-name">${item.product_name}</div>
        <div class="shopping-cart-item-quantity-wrp">
            <div class="shopping-cart-item-quantity">${item.quantity}</div>
            <button class="shopping-cart-item-btn btn btn-dark">&#10006;</button></div>
        <div class="shopping-cart-item-price">${item.price}</div>        
        </div>`
        // &#9660; - arrow down
    }
}



new ProductsList();
new ShoppingCart();