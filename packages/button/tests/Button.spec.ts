import Button from '../Button.vue'
import { mount } from '@vue/test-utils'

const text = 'Huang.small is the best girl'

describe('button.vue', () => {
  test('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary'}
    })
    expect(wrapper.classes()).toContain('button-primary')
  })

  test('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toEqual(text)
  })

  test('handle click', () => {
    const wrapper = mount(Button)
    wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('not-allowed')
  })

})
