<template>

    <div>
        <!--<lesson1></lesson1>-->
        <!--<lesson2></lesson2>-->
        <!--<lesson3></lesson3>-->
        <!--<lesson4></lesson4>-->
        <lesson5></lesson5>

        <!--<list-chat></list-chat>-->

    </div>

</template>


<script>

    import Vue from 'vue';

    import vSelect from 'vue-select';
    import VueChatScroll from 'vue-chat-scroll';
    import Vuelidate from 'vuelidate';

    Vue.use(Vuelidate);
    Vue.use(VueChatScroll);
    Vue.component('v-chat-scroll', VueChatScroll);
    Vue.component('v-select', vSelect);

    Vue.component('lesson1', require('./components/Lesson1Component').default);
    Vue.component('lesson2', require('./components/Lesson2Component').default);
    Vue.component('lesson3', require('./components/Lesson3').default); // MIXINS
    Vue.component('lesson4', require('./components/Lesson4').default); // INPUTS
    Vue.component('lesson5', require('./components/Lesson5').default); // VALIDATE

    Vue.component('list-chat', require('./components/ListChat').default);

    Vue.component('app-list', require('./components/AppList').default);


    export default {
        name: "app"
    }

</script>


<style lang="scss">



</style>
