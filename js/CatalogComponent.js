Vue.component('catalog', {
    props: ['filtered', 'img'],
    template: `
        <div class="products">
            <product v-for="product of $root.filtered" :img="img" :product="product"></product>  
        </div>
    `
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
        <div class="product-item">
            <h2 class="product-title">{{ product.product_name }}</h2>
            <img class="product-img" :src="product.img" :alt="product.product_name" width="200" height="150"
                v-if="product.img">
            <img class="product-img" :src="img" :alt="product.product_name" width="200" height="150"
                v-else>
            <div class="product-price"><span class="product-price-amount">{{ product.price }}</span> $</div>
            <button class="buy-btn" @click="$root.addProduct(product), $root.countTotal()">Add to Cart</button>
        </div>
    `
})