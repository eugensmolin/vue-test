<template>
    <div>
        <!-- работа с формами -->
        <!--textarea-->
        <h1>Form inputs</h1>
        <textarea v-model="textarea"></textarea>
        <p>{{ textarea }}</p>

        <hr>
        <!--checkbox-->
        <label>
            <input type="checkbox" value="instagram" v-model="social">
            Instagram
        </label>
        <label>
            <input type="checkbox" value="vk" v-model="social">
            Vk
        </label>
        <label>
            <input type="checkbox" value="facebook" v-model="social">
            Facebook
        </label>

        <ul>
            <li v-for="s in social">{{ s }}</li>
        </ul>

        <hr>
        <!--radio-->
        <label>
            <input type="radio" value="instagram" v-model="socialRadio">
            Instagram
        </label>
        <label>
            <input type="radio" value="vk" v-model="socialRadio">
            Vk
        </label>
        <label>
            <input type="radio" value="facebook" v-model="socialRadio">
            Facebook
        </label>
        <p>{{ socialRadio }}</p>

        <hr>
        <!--select-->
        <select v-model="socialSelected">
            <option v-for="s in socialsList">{{ s }}</option>
        </select>

        <p>{{ socialSelected }}</p>

        <hr>
        <!--numbers modificator-->
        <input type="text" v-model.number="age">

        <p>{{ age }}</p>

        <hr>
        <!--progress bar-->
        <progress :value="progDefault" max="100"></progress>
        <p>{{ loadingComplete }}</p>

        <hr>
        <!--button - on off-->
        <button-modificator v-model="switched"></button-modificator>
        <h3 v-if="switched">Component is enabled</h3>
        <h3 v-else>Component is disabled</h3>

    </div>
</template>

<script>

    import ButtonModificator from './ButtonModificator';

    export default {
        name: "Inputs",
        components: {
            ButtonModificator
        },
        data() {
            return {
                textarea: 'Text',
                social: [],
                socialRadio: '',
                socialsList: ['instagram', 'vk', 'facebook'],
                socialSelected: 'vk',
                age: 20,
                progDefault: 0, // progress
                loadingComplete: '',
                switched: false
            }
        },
        methods: {
            showSocial() {
                console.log(this.social);
            },
            startProgress() {
                setInterval(() => {
                    if(this.progDefault < 100) {
                        this.progDefault += 5;
                    } else {
                        this.loadingComplete = 'Loading complete';
                        return false;
                    }
                }, 200);
            }
        },
        watch: {
            age(value) {
                console.log(value);
            }
        },
        created() {
            setInterval(() => {
                if(this.progDefault <= 100) {
                    this.progDefault += 5;
                } else {
                    this.loadingComplete = 'Loading complete';
                    return false;
                }
            }, 200);
        }
    }
</script>


<style lang="scss">

    textarea {
        display: inline-block;
        width: 300px;
        height: 100px;
        border: 1px solid #d7d7d7;
        color: #000;
        font-size: 14px;
        padding: 5px;
    }

    p {
        white-space: pre;
    }

    input[type="checkbox"] {
        position: relative;
        top: 2px;
    }

    label {
        margin-right: 15px;
        cursor: pointer;
    }

    /*progress {
        background-color: limegreen;
    }*/

</style>