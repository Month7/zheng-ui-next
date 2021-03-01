import MyButton from '../components/button/Button.vue';

export default {
  title: 'Button 按钮',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args">按钮</my-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  disabled: true
};

export const Info = Template.bind({});
Info.args = {
  type: 'info'
};

export const Warn = Template.bind({});
Warn.args = {
  type: 'warn'
};
