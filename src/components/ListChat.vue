<template>

    <div class="container">
        <div class="main-block">
            <div class="block-list" v-chat-scroll>
                <div class="block-list__msg" v-for="item in messages">{{ item }}</div>
            </div>

            <div class="send-block">
                <input v-model="sendMsg" type="text">
                <button @click="btnSend">Send</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ListChat",
        data() {
            return {
                sendMsg: '',
                messages: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores beatae consectetur corporis deleniti.'
                ]
            }
        },
        methods: {
            btnSend() {
                // console.log(this.sendMsg);
                if (this.sendMsg !== '') {
                    this.messages.push(this.sendMsg);
                    this.sendMsg = '';
                }
            }
        }
    }
</script>

<style lang="scss">

    .container {
        width: 600px;
        margin: 0 auto;
    }

    .main-block {
        display: block;
        width: 400px;
        height: 600px;
        border: 1px solid #ccc;
        background: url(../assets/bg_chat.jpg) center no-repeat;
        background-size: cover;
        overflow: hidden;
        margin: 0 auto;
    }

    .block-list {
        position: relative;
        display: block;
        width: 400px;
        height: 500px;
        padding: 15px;
        margin-right: -17px;
        color: #fff;
        font-family: Arial, sans-saref;

        overflow-y: scroll;
        -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(70%, #fff), color-stop(75%, hsla(0, 0%, 100%, .9)), color-stop(80%, hsla(0, 0%, 100%, .6)), color-stop(85%, hsla(0, 0%, 100%, .3)), color-stop(90%, hsla(0, 0%, 100%, .1)), to(hsla(0, 0%, 100%, 0)));
        -webkit-mask-image: -webkit-linear-gradient(bottom, #fff, #fff 70%, hsla(0, 0%, 100%, .9) 75%, hsla(0, 0%, 100%, .6) 80%, hsla(0, 0%, 100%, .3) 85%, hsla(0, 0%, 100%, .1) 90%, hsla(0, 0%, 100%, 0));
        mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(70%, #fff), color-stop(75%, hsla(0, 0%, 100%, .9)), color-stop(80%, hsla(0, 0%, 100%, .6)), color-stop(85%, hsla(0, 0%, 100%, .3)), color-stop(90%, hsla(0, 0%, 100%, .1)), to(hsla(0, 0%, 100%, 0)));
        mask-image: linear-gradient(0deg, #fff 0, #fff 70%, hsla(0, 0%, 100%, .9) 75%, hsla(0, 0%, 100%, .6) 80%, hsla(0, 0%, 100%, .3) 85%, hsla(0, 0%, 100%, .1) 90%, hsla(0, 0%, 100%, 0));
        /*contain: strict;*/
        -webkit-overflow-scrolling: touch;

        &__msg {
            display: block;
            margin: 15px 15px 30px 15px;
        }
    }

    .send-block {
        margin-top: 30px;
        text-align: center;

        input {
            display: inline-block;
            width: 200px;
            height: 24px;
            padding: 0 5px;
            border: 1px solid #ccc;
        }

        button {
            display: inline-block;
            width: 50px;
            height: 24px;
            text-align: center;
            border: 1px solid #ccc;
            color: #000;
            background-color: #fff;
            font-weight: 600;
            cursor: pointer;
        }
    }

</style>