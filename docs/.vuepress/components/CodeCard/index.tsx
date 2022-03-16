import { defineComponent, ref } from 'vue'
import './style.css'

export default defineComponent({
  setup (props, { slots }) {
    let codeVisable = ref(false)
    let msg = ref('显示代码')

    const handleToggle = () => {
      codeVisable.value = !codeVisable.value
      msg.value = codeVisable.value ? '隐藏代码' : '显示代码'
    }

    return () => (
      <div class="container">
        <div class="card">
          <div class="card-content">
            {slots.default?.()}
            { codeVisable.value ? (
            <div>
              {slots.code?.()}
            </div>
          ) : null }
           
          </div>
          <div class="card-desc" onClick={handleToggle}>{msg.value}</div>
        </div>
      </div>  
    )
  }
})