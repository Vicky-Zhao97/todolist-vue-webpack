<template>
    <div class="main-todo">
        <input type="text" class="add-todo" placeholder="What to do...." autofocus @keyup.enter="addTodo" v-model="content">
        <TodoItem v-for="(item, index) of filterData" :key="index" :todo="item" @del = "handleDeleteItem"></TodoItem>
        <TodoInfo :total="total" :completedTotal="completedTotal" :filter="filter" @toggleState ="handleToggleState" @clearCompleted ="handleClear"></TodoInfo>
    </div>
</template>

<script>

import TodoItem from './coms/TodoItem.vue';
import TodoInfo from './coms/TodoInfo.vue';

let id = 0;
export default {
    name: 'MainTodo',
    components:{
        TodoItem,
        TodoInfo
    },
    data(){
        return {
            todoData:[],
            total:0,
            content: '',
            filter: 'all',
            completedTotal: 0
        }
    },
    methods:{
        addTodo(event){
            if(this.content === ''){
                return;
            }
            this.todoData.unshift({
                id: id++,
                content: this.content,
                completed: false
            })
            this.content = ''; // 清空输入框
        },
        handleDeleteItem(id){
            this.todoData.splice(this.todoData.findIndex(item => item.id === id),1)
        },
        handleToggleState(state){
            this.filter = state
        },
        handleClear(){
            this.todoData = this.todoData.filter(item => item.completed == false)
        }
    },
    watch:{
        todoData:{
            deep: true,
            handler(){
                this.total = this.todoData.filter(item => item.completed == false).length
            }
        }
    },
    computed:{
        filterData(){
            switch(this.filter){
                case 'all':
                    return this.todoData
                    break
                case 'unfinished':
                    return this.todoData.filter(item => item.completed == false)
                    break
                case 'completed':
                    this.completedTotal = this.todoData.filter(item => item.completed == true).length
                    return this.todoData.filter(item => item.completed == true)
                    break
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/theme.styl'
.main-todo
    width: 600px
    margin: 0 auto
    background-color: #fff
    box-shadow: 0 0 5px $red
    .add-todo
        padding:16px 16px 16px 20px
        width: 100%
        font-size: 24px
        font-weight: inherit
        font-family: inherit
        color: $red
        border: none
        outline: none
        box-sizing: border-box
        &::placeholder
            color: $lightred // 设置颜色为灰色
            opacity: 0.7     // 保持 placeholder 的不透明度
</style>

