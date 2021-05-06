import zCarousel from '../packages/carousel/carousel.vue';
import zCarouselItem from '../packages/carousel/carouselItem.vue'

export default {
  title: 'zheng-ui-next/Carousel',
  component: { zCarousel, zCarouselItem },
  argTypes: {
    autoPlay: { control: { type: 'boolean', options: [true, false] }, description: '是否自动轮播', default: false},
    interval: { control: { type: 'number'}, description: '自动切换的时间间隔，单位为毫秒', default: 2000 },
    loop: { control: { type: 'boolean'}, description: '是否循环显示', default: true }
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { zCarousel, zCarouselItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <div style="display: flex;justify-content: center">
    <z-carousel v-bind="args">
      <z-carousel-item name=1><div style="color:#fff;background: #ccc;height: 200px;width: 400px">1</div></z-carousel-item>
      <z-carousel-item name=2><div style="color:#fff;background: #000;height: 200px;width: 400px">2</div></z-carousel-item>
      <z-carousel-item name=3><div style="color:#fff;background: #ccc;height: 200px;width: 400px">3</div></z-carousel-item>
      <z-carousel-item name=4><div style="color:#fff;background: #000;height: 200px;width: 400px">4</div></z-carousel-item>
    </z-carousel>
  </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  autoPlay: true,
}


