<template>

    <div>

        <h2>App List</h2>

        <input type="text" v-model="search">
        <ul>
            <li v-for="name in filterNames">{{ name }}</li>
        </ul>

        <div>{{ this.translate.en.name }} - {{ this.translate.en.age }}</div>

    </div>

</template>

<script>

    import ListMixin from '../ListMixin';
    import TransAppList from '../translates/AppList';

    export default {
        name: "AppList",
        mixins: [ListMixin],
        data() {
            return {
                translate: {}
            }
        },
        created() {
            this.translate = TransAppList;
            console.log(this.translate);
        }
    }
</script>

<style scoped>

</style>