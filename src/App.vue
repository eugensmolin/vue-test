<template>

    <div>
        <!--<lesson1></lesson1>-->
        <lesson2></lesson2>
        <!--<list-chat></list-chat>-->

    </div>

</template>


<script>

    import Vue from 'vue';

    import vSelect from 'vue-select';
    import VueChatScroll from 'vue-chat-scroll';

    Vue.use(VueChatScroll);
    Vue.component('v-chat-scroll', VueChatScroll);
    Vue.component('v-select', vSelect);

    Vue.component('lesson1', require('./components/Lesson1Component').default);
    Vue.component('lesson2', require('./components/Lesson2Component').default);
    Vue.component('list-chat', require('./components/ListChat').default);


    export default {
        name: "app"
    }

</script>


<style lang="scss">



</style>
