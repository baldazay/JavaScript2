Vue.component('search', {

    data() {
        return {
            userSearch: ''
        }
    },


    /*  template: `
         <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
             <input type="text" class="search-field" placeholder="Search product" v-model="$root.userSearch">
             <button class="search-btn" type="submit">
                 <i class="fas fa-search"></i>
             </button>
         </form>
     ` */
    template: `
        <form class="header__search-form" action="#" @submit.prevent="$root.$refs.products.filter(userSearch)">
            <label for="search" class="invisible">Search</label>
            <input class="header__search-input input-style" type="text" placeholder="Search..." v-model="$root.userSearch">
            <button class="header__search-btn btn-padding" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    `
})
