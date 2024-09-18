<template>
    <div :class="['todo-item', todo.completed ? 'completed' : '']">
        <input type="checkbox" v-model="todo.completed">
        <label > {{ todo.content }}</label>
        <button @click="delItem"></button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props:{
        todo: Object
    },
    methods: {
        delItem() {
            this.$emit('del', this.todo.id)
        }
    }
}
</script>

<style lang="stylus" scoped>

@import '~styles/theme.styl'
@import '~styles/mixins.styl'
.todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    align-items: center
    border-top: 1px solid rgba(252,157,154,0.5)
    &:hover
        button:after
            content: 'x'
            font-size: 24px
            color:$purple
    &.completed
        label
            color: $lightred
            text-decoration: line-through
    input
        width: 50px
        height: 30px
        text-align: center
        cleanDefaultStyle()  // 应用混合宏
        &:after
            content: url(images/unchecked.svg)
        &:checked
            content: url(images/checked.svg)

    label
        flex: 1
        line-height: 30px 
        color: $red
        transition: color 0.3s ease-in-out

    button
        width: 40px
        background-color: transparent
        cleanDefaultStyle()  // 应用混合宏
        cursor: pointer

</style>