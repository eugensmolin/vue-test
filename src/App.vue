<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h2>{{ msg }}</h2>
        <div v-for="elem in arr">
            {{ elem.name }} - {{ elem.years }}
        </div>
    </div>
    <!--<counter></counter>-->
</template>

<script>

    // Vue.component('counter', require('./components/Counter').default);

    var arr = [
        {
            name: 'Stan',
            years: 32
        },
        {
            name: 'Estas',
            years: 65
        }
    ];

    export default {
        name: "app",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                arr: arr
            }
        }
    }
</script>

<style lang="scss">

</style>
