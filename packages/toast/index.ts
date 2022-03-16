import Toast from './toast'

import { App } from 'vue'

const install = (app: App) => {
  app.component(Toast.name, Toast)
}

export default {
  install,
}