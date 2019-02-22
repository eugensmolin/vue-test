<template>

    <div>
        <!--<lesson1></lesson1>-->
        <lesson2></lesson2>
    </div>

</template>


<script>

    import Vue from 'vue';

    Vue.component('lesson1', require('./components/Lesson1Component').default);
    Vue.component('lesson2', require('./components/Lesson2Component').default);


    export default {
        name: "app",

    }
</script>


<style lang="scss">

</style>
