import Button from './Button.vue'

const install = (app) => {
  app.component(Button.name, Button)
}

export default {
  install,
}