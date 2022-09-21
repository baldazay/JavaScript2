Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
        <div class='cart' v-show='visibility'>
            <div class="product-item-none" v-if="!cartItems.length">Your cart is empty</div>
            <cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :item="item">
            </cart-item>
            <div class='cart-footer' v-if="cartItems.length">
                <button class="clear-cart-btn" @click="$root.clearCart" v-if="cartItems.length">Clear Cart</button>
                <div class="cart-total">Total: <span class="cart-total-amount">{{ $root.totalPrice }}</span>$</div>
            </div>
        </div> 
    `
});

Vue.component('cart-item', {
    props: ['img', 'item'],
    template: `
        <div class="cart-item">
            <img class="cart-img" :src="item.img" :alt="item.product_name" width="120" height="80" v-if="item.img">      
            <img class="cart-img" :src="img" :alt="item.product_name" width="120" height="80" v-else>
            <div class="cart-item-info">
                <h2 class="cart-title">{{ item.product_name }}</h2>
                <div class="cart-price">Price: <span class="cart-price-amount">{{ item.price }}</span> $</div>
                <div class="cart-quantity">Quantity: <span class="cart-quantity-num">{{ item.quantity }}</span>
            </div>
            <button class="delete-btn" @click="$root.removeProduct(item)">X</button>
        </div> 
    `
});

/* Vue.component('cart-footer', {
    props: ['cartItems']
    template: `
        <div class='cart-footer v-if="cartItems.length"'
            <button class="clear-cart-btn" @click="$root.clearCart" v-if="!cartItems.length">Clear Cart</button>
            <div class="cart-total">Total: <span class="cart-total-amount">{{ $root.totalPrice }}</span>$</div>
        </div>
    `
}); */