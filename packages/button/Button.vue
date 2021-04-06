<template>
  <button :class="styleClass" class="button" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { reactive, computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
type IButtonType = PropType<'primary' | 'success' | 'warn' | 'danger' | 'info'>

export default defineComponent({
  name: 'z-button',
  emits: ['click'],
  props: {
    type: {
      type: String as IButtonType,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    props = reactive(props)
    const styleClass = computed(() => {
      return [
        `button-${props.type}`,
        props.disabled ? 'not-allowed' : ''
      ]
    })
    
    const handleClick = args => {
      ctx.emit('click', args)
    } 

    return {
      handleClick,
      styleClass
    }
  }
})
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
  display: inline;
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