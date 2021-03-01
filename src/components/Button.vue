<template>
  <div :class="'button-' + type" class="button" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
import { reactive, computed, toRefs } from 'vue'
export default {
  name: 'ZButton',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  setup(props, ctx) {
    props = reactive(props)
    console.log(props.type)
    console.log('button-' + props.type.toString())
    const styleClass = computed(() => {
      return 'button-' + props.type
      
    })
    
    const handleClick = args => {
      ctx.$emits('click', args)
    } 

    return {
      handleClick,
      styleClass
    }
  }
}
</script>
<style>
.button{
  color: #fff;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 6px 12px;
  cursor: pointer;
  margin: 4px;
}
.button:hover{
  opacity: .9;
}
.not-allowed{
  cursor: not-allowed;
  opacity: .6;
}
.button-primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button-success{
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.button-info{
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.button-danger{
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.button-warn{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
</style>