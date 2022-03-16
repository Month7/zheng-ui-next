import Button from './Button.vue'
import { App } from 'vue'

const install = (app: App) => {
  app.component(Button.name, Button)
}

export default {
  install,
}
