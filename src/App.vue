<template>
    <div class="container">
        <div class="logo">
            <img src="./assets/logo.png">
        </div>

        <div class="content">
            <input type="text" @input="changeInput">
            <h3 class="result">
                {{ result }}
            </h3>
            <!-- ===== -->
            <h3>{{ name }} {{ name.split('') }}</h3>
            <!-- ===== -->
            <a :href="url">Google</a>
        </div>
    </div>
</template>

<script>


    export default {
        name: "app",
        data() {
            return {
                result: 'Hello Vue!',
                name: 'Hello Vue',
                url: 'http://google.com'
            }
        },
        methods: {
            changeInput(event) {
                this.result = event.target.value;
            }
        }
    }
</script>

<style lang="scss">
    .container {
        width: 600px;
        margin: 0 auto;

        .logo {
            text-align: center;
        }

        .content {
            text-align: center;
        }
    }
</style>
