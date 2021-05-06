<template>
  <div class="z-carousel-container" ref="carouselDom" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div class="z-carousel">
      <div class="z-carousel-btns">
        <div v-for="(item, index) in data.list" :key="index" @click="handleCarouselBtnClick(index)"></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, SetupContext, defineComponent, onMounted, provide, ref, onBeforeUnmount } from 'vue'
import CarouselItem from './carouselItem.vue'

interface ICarouselProp {
  trigger?: string;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
}

export default defineComponent({
  name: 'z-carousel',
  setup(props: ICarouselProp, ctx: SetupContext) {
    props = reactive(props)
    let currentIndex = 1
    const activeIndex = ref(1)
    const direction = ref('left')

    // data
    const data = reactive({
      list: [],
      timer: null,
      isAutoPlaying: false,
    })

    // provide
    provide('activeIndex', activeIndex)
    provide('direction', direction)

    // methods

    const getCarouselList = () => {
      ctx.slots.default().forEach((slot: any, index: number) => {
        data.list.push(index)
      })
    }
    /**
     * 点击
     */
    const handleCarouselBtnClick = (index: number) => {
      let direction2 = 'left'
      if (props.loop && data.isAutoPlaying && index === 0) {
        direction2 = 'left'
      } else {
        direction2 = index + 1 > currentIndex ? 'left' : 'right'
      }
      activeIndex.value = index + 1
      currentIndex = index + 1
      direction.value = direction2
    }

    const startAutoPlay = () => {
      if (!props.autoPlay) return
      let index = (currentIndex - 1) || 0
      data.isAutoPlaying = true
      data.timer = setInterval(() => {
        if (index < data.list.length - 1) {
          index += 1
        } else {
          index = 0
        }
        handleCarouselBtnClick(index)
      }, props.interval || 2000)
    }

    const stopAutoPlay = () => {
      if (data.timer) {
        clearInterval(data.timer)
        data.timer = null
        data.isAutoPlaying = false
      }
    }
    

    // hook
    onMounted(() => {
      getCarouselList()
      if (props.autoPlay) startAutoPlay()
    }) 

    onBeforeUnmount(() => {
      stopAutoPlay()
    })

    return {
      handleCarouselBtnClick,
      data,
      startAutoPlay,
      stopAutoPlay
    }
    
  },
  props: {
    autoPlay: {
      type: Boolean
    },
    loop: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
    }
  },
  components: {
    CarouselItem
  }
})
</script>
<style>
.z-carousel-container {
  width: 450px;
}
.z-carousel{
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
}
.z-carousel-side-btns-right{
  position: absolute;
  right: 10%;
  top:50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 1;
  z-index: 999;
}
.z-carousel-side-btns-left{
  position: absolute;
  left: 8%;
  top:50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 1;
  z-index: 999;
}
.z-carousel-btns{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  opacity: 1!important;
  z-index: 90!important;
  display: flex;
  width: 120px;
}
.z-carousel-btns div {
  display: inline-block;
  width: 100%;
  flex: 1;
  height: 6px;
  font-size:12px;
  line-height: 40px;
  margin-right: .2em;
  margin-left: .2em;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.z-index-active{
  background: lightblue!important;
  color: #fff;
}

</style>
