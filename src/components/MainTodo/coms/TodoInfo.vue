<template>
    <div class="todo-info">
        <span class="total">  {{displayText}}</span>
        <div class="tabs">
            <a 
                :class="['btn','primary', 'border', state == item ? 'active' : '']" 
                v-for="(item, index) in states" 
                :key="index"
                @click="toggleState(item)">
                {{ item }}</a>
        </div>
        <button class="btn info" @click="clearCompleted">Clear-Completed</button>
    </div>
</template>


<script>
export default{
    name: 'TodoInfo',
    data(){
        return {
            states:['all','unfinished','completed'],
            state: 'all'
        }
    },
    props:{
        total: Number,
        completedTotal: Number,
    },
    methods:{
        toggleState(state){
            this.state = state
            this.$emit('toggleState', state)
        },
        clearCompleted(){
            this.$emit('clearCompleted')
        }
    },
    computed: {
        displayText() {
            if (this.state === 'completed') {
                return `${this.completedTotal} items completed`;
            } else {
                return `${this.total} items left`;
            }
        }
    }
}
</script>

<style lang="stylus">
@import '~styles/theme.styl';
@import '~styles/mixins.styl';

.todo-info
    display: flex
    justify-content: space-between
    font-weight: 400
    padding: 5px 5px 5px 25px
    text-align: center
    line-height: 30px
    border-top: 1px solid rgba(252,157,154,.5)

    .total
        color: $yellow
    .tabs
        display: flex
        justify-content :space-between
        width: 260px
        text-align: center
    .btn.primary.border
        primaryBorderBtn()
        &.active
            primaryBtn(state)

        // a
        //     // border-botton: 1px solid $light-red
        //     // border-radius: 5px
        //     // padding 0 10px
        //     primaryBorderBtn()
        //     &.active
        //         // background-color: $light-red
        //         // color: white
        //         primaryBtn()
    .btn.info// .clear
        // padding: 0 10px
        // background-color: $green
        // border-radius: 5px
        // color: white
        // cleanDefaultStyle()  // 应用混合宏
        infoBtn()
</style>