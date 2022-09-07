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
        showCart: false
    },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },

        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(item => regexp.test(item.product_name));
        },

        clearCart() {
            cartItems = [];
        }
    },

    mounted() {
        /* this.getJson(`${API + this.cartItemsUrl}`)
            .then(data => {
                for (let elem of data.contents) {
                    this.cartItems.push(elem);
                }
            }); */

        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let elem of data) {
                    this.$data.products.push(elem);
                    this.$data.filtered.push(elem);
                }
            });

        this.getJson(`${this.localUrl}`)
            .then(data => {
                for (let elem of data) {
                    this.products.push(elem);
                    this.filtered.push(elem);
                }
            })
    }
})