import Button from './button/button.vue'
import { App } from 'vue'

const components = [Button]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install,
}