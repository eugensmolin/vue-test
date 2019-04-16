<template>
    <div>
        <slot name="title"></slot>
        <hr>
        <slot name="desc"></slot>
    </div>
</template>

<script>
    export default {
        name: "CarComponent",
        props: ["carName"],
        methods: {

        }
    }
</script>

<style scoped>



</style>