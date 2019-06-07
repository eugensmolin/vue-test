<template>
    <div class="container">

        <!-- filters -->
        <h1>{{ title }}</h1>
        <h1>{{ title | lowercase }}</h1>
        <h1>{{ title | uppercase }}</h1>
        <h1>{{ title | uppercase | lowercase }}</h1>

        <hr>

        <input type="text" v-model="search">
        <ul>
            <li v-for="name in filterNames">{{ name }}</li>
        </ul>

        <hr>

        <!-- mixins -->
        <app-list></app-list>

    </div>
</template>

<script>

    import ListMixin from '../ListMixin';

    export default {
        name: "Lesson3",
        data() {
            return {
                title: 'Title',
            }
        },
        mixins: [ListMixin],
        filters: {
            lowercase(value) {
                return value.toLowerCase();
            }
        }
    }

</script>

<style scoped>

    .container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        border: 1px solid #d7d7d7;
        padding: 15px;
    }

</style>