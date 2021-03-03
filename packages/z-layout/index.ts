import { App } from 'vue'
import ZLayout from './src/index.vue'
ZLayout.install = (app: App): void => {
  app.component(ZLayout.name, ZLayout)
}
export default ZLayout
