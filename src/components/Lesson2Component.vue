<template>
    <div class="container">

        <!--<my-car carName="Mazda"></my-car>-->
        <!--<my-car>
            <h1 slot="title" v-colored="'green'" v-if="visible">{{ carName }}</h1>
            <p slot="desc">{{ carDesc }}</p>
        </my-car>-->

        <h1 v-colored:color="'green'" v-if="visible">{{ title }}</h1>

        <!-- Local directives -->
        <h1 v-font>Lorem ipsum dolor sit amet.</h1>

        <button @click="visible = !visible">Toggle</button>
        <button @click="title = 'New title'">Change title</button>

        <!--<hr>-->
        <!--<my-counter></my-counter>-->

    </div>
</template>

<script>

    import Car from './CarComponent';
    import Counter from './CounterComponent';

    export default {
        name: "Lesson2Component",
        data() {
            return {
                carName: "Ford",
                carDesc: "Lorem ipsum dolor sit amet.",
                visible: true,
                title: "Title"
            }
        },
        components: {
            myCar: Car,
            myCounter: Counter
        },
        // beforeCreate() {
        //     console.log('Before create');
        // },
        // created() {
        //     console.log('Created');
        // },
        // beforeMount() {
        //     console.log('Before Mount');
        // },
        // mounted() {
        //     console.log('Mounted');
        // },
        // beforeUpdate() {
        //     console.log('Before Update');
        // },
        // updated() {
        //     console.log('Updated');
        // },
        // beforeDestroy() {
        //     console.log('Before destroyed');
        // },
        // destroyed() {
        //     console.log('Destroyed');
        // },
        methods: {},
        directives: {
            font: {
                bind(el, bindings, vnode) {
                    el.style.color = 'blue';
                }
            }
        }
    }

</script>


<style lang="scss">

    .container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        border: 1px solid #d7d7d7;
        padding: 15px;
    }

</style>