import { defineClientAppEnhance } from '@vuepress/client'
import Button from './components/Button'
import CodeCard from './components/CodeCard'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('myButton', Button)
  app.component('myCode', CodeCard)
})
