Vue.component('search', {
    template: `
        <form action="#" class="search-form" @submit.prevent="$root.filter">
            <input type="text" class="search-field" placeholder="Search product" v-model="$root.userSearch">
            <button class="search-btn" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    `
})