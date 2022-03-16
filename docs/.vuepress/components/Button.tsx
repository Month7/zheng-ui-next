import { defineComponent } from 'vue'
import Button from '../../../packages/button/button.vue'
import Toast from '../../../packages/toast/toast'
import Card from './CodeCard/index'

export default defineComponent({ 
  components: {
    Toast,
    zButton: Button,
    Card
  },
  setup() {
    
    const code1 = `<z-button type="primary">主要按钮</z-button> 
<z-button type="success">成功按钮</z-button>
<z-button type="info">信息按钮</z-button>
<z-button type="warn">警告按钮</z-button>
<z-button type="danger">危险按钮</z-button>`
    const code2 = ` <z-button type="primary" disabled>主要按钮</z-button>
<z-button type="success" disabled>成功按钮</z-button>
<z-button type="info" disabled>信息按钮</z-button>
<z-button type="warn" disabled>警告按钮</z-button>
<z-button type="danger" disabled>危险按钮</z-button>`

  const slots = {
    default: () => (
    <div class="btn-group">
      <z-button type="primary">主要按钮</z-button>
      <z-button type="success">成功按钮</z-button>
      <z-button type="info">信息按钮</z-button>
      <z-button type="warn">警告按钮</z-button>
      <z-button type="danger">危险按钮</z-button>   
    </div>),
    code: () => (
      <pre class="language-text">
        <code>{code1}</code>
      </pre>
    )
  }

  const slots2 = {
    default: () => (
      <div class="btn-group">
        <z-button type="primary" disabled>主要按钮</z-button>
        <z-button type="success" disabled>成功按钮</z-button>
        <z-button type="info" disabled>信息按钮</z-button>
        <z-button type="warn" disabled>警告按钮</z-button>
        <z-button type="danger" disabled>危险按钮</z-button>
      </div>
    ),
    code: () => (
      <pre class="language-text">
        <code>{code2}</code>
      </pre>
    )
  }

    return () => (
      <div class="container">
        <h3>基础用法</h3>
        <Card v-slots={slots}></Card>
        <h3>禁用状态</h3>
        <Card v-slots={slots2}></Card>
      </div>
    )
  }
})
