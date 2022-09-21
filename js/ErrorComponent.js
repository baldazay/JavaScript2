Vue.component('error', {
    template: `
        <div class="error" v-show="$root.error">
            <h2>Error. Couldn't connect to server. Please, try again.
        </div>
    `
});