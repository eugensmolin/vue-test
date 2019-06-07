<template>
    <div>

        <button
                class="on"
                :class="{'active': value}"
                @click="onChange(true)"
        >On
        </button>

        <button
                class="off"
                :class="{'active': !value}"
                @click="onChange(false)"
        >Off
        </button>

    </div>
</template>

<script>
    export default {
        name: "ButtonModificator",
        props: ["value"],
        data() {
            return {
                // enabled: false
            }
        },
        methods: {
            onChange(newValue) {
                this.$emit('input', newValue);
            }
        }
    }
</script>

<style lang="scss" scoped>

    button {
        display: inline-block;
        width: 100px;
        height: 40px;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        border: none;
        background-color: #d7d7d7;
        cursor: pointer;
        margin-right: 15px;
        transition: all .2s linear;

        &:hover {
            box-shadow: 0 0 5px 1px #999;
        }

        &.on.active {
            background-color: limegreen;
        }

        &.off.active {
            background-color: red;
        }
    }

</style>