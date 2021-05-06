<template>
  <transition :name="transitionName">
    <div class="z-carousel-item" v-show="activeIndex == name">
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts">
import { computed, ref, defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'z-carousel-item',
  props: {
    name: {
      type: String,
      default: '1'
    }
  },
  setup() {
    // inject
    const activeIndex = inject('activeIndex')
    const direction: {
      value: string
    } = inject('direction')

    const transitionName = computed(() => `z-carousel-slide-${direction.value}`)
    
    return {
      activeIndex,
      direction,
      transitionName
    }
    
  },
})
</script>
<style scoped>

.z-carousel-slide-left-enter-active, .z-carousel-slide-left-leave-active{
  transition: all 1s;
}
.z-carousel-slide-left-leave-active{
  position: absolute;
  left: 0;
  top: 0;
}
.z-carousel-slide-left-enter{
  opacity: 0;
  transform: translateX(100%)
}
.z-carousel-slide-left-leave, .z-carousel-slide-left-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}

.z-carousel-slide-right-enter-active, .z-carousel-slide-right-leave-active{
  transition: all 1s;
}
.z-carousel-slide-right-leave-active{
  position: absolute;
  left: 0;
  top: 0;
}
.z-carousel-slide-right-enter{
  opacity: 0;
  transform: translateX(-100%)
}
.z-carousel-slide-right-leave, .z-carousel-slide-right-leave-to{
  opacity: 0;
  transform: translateX(100%)
}
</style>