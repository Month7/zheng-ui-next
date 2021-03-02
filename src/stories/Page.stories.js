import MyPage from './Page.vue';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Zheng-UI-Next',
  component: MyPage,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: '<my-page :user="user" />',
});

