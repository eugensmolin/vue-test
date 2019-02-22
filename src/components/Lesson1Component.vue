<template>
    <div class="container">
        <!--<div class="logo">
            <img src="./assets/logo.png">
        </div>-->

        <div class="content">
            Counter: {{ counter }}
            <button @click="addNum(1, $event)">Click</button>
            <button @click="addNum(5, $event)">Click</button>

            <h2 @mouseover="hover">Header hover!</h2>
            <hr>
            <h2>
                <a href="http://google.com" target="_blank" @click.prevent="">Google</a>
            </h2>
            <h2 @mousemove="mouseMove">
                X: {{ x }} | Y: {{ y }}
                <span @mousemove.stop="">Stop</span>
            </h2>
            <hr>
            <input @keyup.enter.space="inpValue">
            <hr>
            <input v-model="inputValue">
            <h3>{{ inputValue }}</h3>
            <hr>
            <!--<input v-model="color">
            <div>
                <div class="square"
                     :class="[color, {'red': isActive}]"
                ></div>

                <div class="circle"
                     @click="isActive = !isActive"
                     :class="cssClasses"
                ></div>
            </div>-->
            <hr>
            <input v-model="color">
            <input v-model="height">
            <div>
                <div
                        class="circle"
                        :style="circleClasses"
                ></div>
                <div
                        class="circle"
                        :style="[circleClasses, {'width': height + 'px'}]"
                ></div>
            </div>
            <hr>

            <h3 v-if="type === 'a'">A</h3>
            <h3 v-else-if="type === 'b'">B</h3>
            <h3 v-else-if="type === 'c'">C</h3>
            <h3 v-else>not match</h3>
            <input v-model="type">

            <template v-if="isVisible">
                <h2>Title 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, minima!</p>
            </template>
            <template v-else>
                <h2>Title 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam corporis eos in mollitia neque
                    nobis perspiciatis praesentium quae rem!</p>
            </template>
            <button @click="isVisible = !isVisible">Toggle</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Lesson1Component",
        data() {
            return {
                counter: 0,
                x: 0,
                y: 0,
                inputValue: 'value',
                isActive: false,
                color: '',
                height: 30,
                type: 'a',
                isVisible: true
            }
        },
        computed: {
            cssClasses() {
                return {
                    'red': this.isActive,
                    'blue': !this.isActive
                }
            },
            circleClasses() {
                return {
                    'background-color': this.color,
                    'height': this.height + 'px'
                }
            }
        },
        methods: {
            addNum(num, e) {
                this.counter += num;

                if (num === 1) {
                    e.target.style.color = 'green';
                } else if (num === 5) {
                    e.target.style.color = 'red';
                }
            },
            hover(e) {
                e.target.style.background = '#ccc';
            },
            mouseMove(e) {
                this.x = e.clientX;
                this.y = e.clientY;
                // console.log(e);
            },
            inpValue(e) {
                console.log(e.target.value);
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

        .square,
        .circle {
            display: inline-block;
            width: 30px;
            height: 30px;
            border: 1px solid #555;
            box-shadow: 0 0 8px #999;
            margin-top: 10px;
        }

        .circle {
            border-radius: 50px;
        }

        .red {
            background-color: firebrick;
        }

        .blue {
            background-color: cornflowerblue;
        }

        .green {
            background-color: seagreen;
        }
    }
</style>