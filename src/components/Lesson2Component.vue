<template>
    <div class="container">

        <ul>
            <li v-for="name in peoples">{{ name }}</li>
        </ul>

        <ul>
            <li v-for="(value,key,index) in person">{{ index + 1 }} - {{ key }}: {{ value }}</li>
        </ul>
        <hr>
        <h2>Counter: {{ counter }} / {{ counter2 }}</h2>
        <h3>Result: {{ result() }}</h3>
        <h3>Computed result: {{ computedResult }}</h3>

        <button @click="add">Add</button>
        <button @click="sub">Sub</button>
        <button @click="counter2++">Add counter2</button>

    </div>
</template>

<script>
    export default {
        name: "Lesson2Component",
        data() {
            return {
                peoples: ['Vlad', 'Max', 'Stan'],
                person: {
                    name: 'Vlad',
                    age: 30,
                    job: 'Backend developer'
                },
                counter: 0,
                counter2: 0,
                condition: 'Less than 3'
            }
        },
        methods: {
            add() {
                this.counter++;
            },
            sub() {
                this.counter--;
            },
            result() {
                console.log('Result was called');
                return this.counter > 3 ? 'More than 3' : 'Less than 3';
            }
        },
        computed: {
            computedResult() {
                console.log('Computed result was called');
                return this.counter > 3 ? 'More than 3' : 'Less than 3';
            }
        },
        watch: {
            counter(val) {
                console.log('Counter: ', val);
            }
        }
    }
</script>

<style lang="scss">
    .container {
        width: 600px;
        margin: 0 auto;
    }
</style>