import Carousel from './carousel.vue'
import CarouselItem from './corousel-item.vue'
import { App } from 'vue'

const install = (app: App) => {
  app.component(Carousel.name, Carousel)
  app.component(CarouselItem.name, CarouselItem)
}

export default {
  install,
}