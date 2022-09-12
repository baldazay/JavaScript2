const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: "#app",
    data: {
        catalogUrl: '/catalogData.json',
        localUrl: 'getProducts.json',
        products: [],
        filtered: [],
        cartItemsUrl: '/getBasket.json',
        cartItems: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: "",
        showCart: false,
        totalPrice: 0
    },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },

        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(item => product.id_product == item.id_product);
                        if (find) {
                            find.quantity++;
                            this.countTotal();
                        } else {
                            this.$set(product, 'quantity', 1);
                            this.cartItems.push(product);
                            this.countTotal();
                        }
                    }
                })
        },

        countTotal() {
            this.totalPrice = 0;
            for (let item of this.cartItems) {
                this.totalPrice += item.price * item.quantity;
            };
            return this.totalPrice;
        },

        removeProduct(item) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                    this.countTotal();
                })
        },


        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(item => regexp.test(item.product_name));
        },

        clearCart() {
            this.cartItems = [];
        }

    },

    mounted() {
        this.getJson(`${API + this.cartItemsUrl} `)
            .then(data => {
                for (let elem of data.contents) {
                    this.cartItems.push(elem);
                    this.countTotal();
                }
            });

        this.getJson(`${API + this.catalogUrl} `)
            .then(data => {
                for (let elem of data) {
                    this.products.push(elem);
                    this.filtered.push(elem);
                }
            });

        this.getJson(`${this.localUrl} `)
            .then(data => {
                for (let elem of data) {
                    this.products.push(elem);
                    this.filtered.push(elem);
                }
            })
    }

})