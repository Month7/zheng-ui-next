import Carousel from '../carousel.vue'
import CarouselItem from '../carouselItem.vue'
import { mount, MountingOptions } from '@vue/test-utils'
import { nextTick } from 'vue'

const _mount = (template: string, data?: () => void) => {
  return mount({
    template,
    data,
    components: {
      'z-carousel': Carousel,
      'z-carousel-item': CarouselItem
    }
  }) 
}

const sleep = async (time: number) => {
  return new Promise<void>((resolve) => {
    return setTimeout(() => {
      resolve()
    }, time)
  })
}

const text = 'Huang.small is the best girl'
const t1 = `
<div style="display: flex;justify-content: center">
  <z-carousel>
    <z-carousel-item name=1><div style="color:#fff;background: #ccc;height: 200px;width: 400px">1</div></z-carousel-item>
    <z-carousel-item name=2><div style="color:#fff;background: #000;height: 200px;width: 400px">2</div></z-carousel-item>
    <z-carousel-item name=3><div style="color:#fff;background: #ccc;height: 200px;width: 400px">3</div></z-carousel-item>
    <z-carousel-item name=4><div style="color:#fff;background: #000;height: 200px;width: 400px">4</div></z-carousel-item>
  </z-carousel>
</div>
`

describe('Carousel.vue', () => {
  test('create', async () => {
    const wrapper = _mount(t1)
    expect(wrapper.findAll('.z-carousel-item').length).toBe(4)
    expect(wrapper.findAll('.z-carousel-item')[0].isVisible()).toBeTruthy()
    expect(wrapper.findAll('.z-carousel-item')[1].isVisible()).toBeFalsy()
  })
  test('正确自动轮播', async () => {
    const t2 = `
    <div style="display: flex;justify-content: center">
      <z-carousel :autoPlay="true" :interval="50">
        <z-carousel-item name=1><div style="color:#fff;background: #ccc;height: 200px;width: 400px">1</div></z-carousel-item>
        <z-carousel-item name=2><div style="color:#fff;background: #000;height: 200px;width: 400px">2</div></z-carousel-item>
        <z-carousel-item name=3><div style="color:#fff;background: #ccc;height: 200px;width: 400px">3</div></z-carousel-item>
        <z-carousel-item name=4><div style="color:#fff;background: #000;height: 200px;width: 400px">4</div></z-carousel-item>
      </z-carousel>
    </div>
    `
    const wrapper = _mount(t2)
    await sleep(10)
    expect(wrapper.findAll('.z-carousel-item')[0].isVisible()).toBeTruthy()
    expect(wrapper.findAll('.z-carousel-item')[1].isVisible()).toBeFalsy()
    await nextTick()
    await sleep(60)
    expect(wrapper.findAll('.z-carousel-item')[0].isVisible()).toBeFalsy()
    expect(wrapper.findAll('.z-carousel-item')[1].isVisible()).toBeTruthy()
  })
  test('鼠标移入移出时，停止/开启自动轮播', async () => {
    const t2 = `
    <div style="display: flex;justify-content: center">
      <z-carousel :autoPlay="true" :interval="50">
        <z-carousel-item name=1><div style="color:#fff;background: #ccc;height: 200px;width: 400px">1</div></z-carousel-item>
        <z-carousel-item name=2><div style="color:#fff;background: #000;height: 200px;width: 400px">2</div></z-carousel-item>
        <z-carousel-item name=3><div style="color:#fff;background: #ccc;height: 200px;width: 400px">3</div></z-carousel-item>
        <z-carousel-item name=4><div style="color:#fff;background: #000;height: 200px;width: 400px">4</div></z-carousel-item>
      </z-carousel>
    </div>
    `
    const wrapper = _mount(t2)
    await sleep(10)
    expect(wrapper.findAll('.z-carousel-item')[0].isVisible()).toBeTruthy()
    expect(wrapper.findAll('.z-carousel-item')[1].isVisible()).toBeFalsy()
    await wrapper.find('.z-carousel-container').trigger('mouseenter')
    await nextTick()
    await sleep(60)
    expect(wrapper.findAll('.z-carousel-item')[0].isVisible()).toBeTruthy()
    expect(wrapper.findAll('.z-carousel-item')[1].isVisible()).toBeFalsy()
    await wrapper.find('.z-carousel-container').trigger('mouseleave')
    await nextTick()
    await sleep(60)
    expect(wrapper.findAll('.z-carousel-item')[0].isVisible()).toBeFalsy()
    expect(wrapper.findAll('.z-carousel-item')[1].isVisible()).toBeTruthy()
  })
  
})