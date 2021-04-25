import MyButton from '../packages/button/button.vue';

export default {
  title: 'zheng-ui-next/Button',
  component: MyButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    type: {
      control: { type: 'select', options: ['primary', 'success', 'info', 'danger', 'warn']
    }},
    onClick: {},
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
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
  template: '<my-button v-bind="args">Button</my-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};

