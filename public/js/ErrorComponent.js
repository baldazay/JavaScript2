Vue.component('error', {
    data() {
        showError: false
    },

    template: `
        <div class="error" v-show="this.showError">
            <h2 class="error-message">Error. Couldn't connect to server. Please, try again.
        </div>
    `
});