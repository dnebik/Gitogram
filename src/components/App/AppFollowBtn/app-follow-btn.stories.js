import AppFollowBtn from './index';
import '@/assets/styles/colors.scss';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AppFollowBtn',
  component: { AppFollowBtn },
};

const template = (args) => ({
  components: { AppFollowBtn },
  template: '<app-follow-btn :is-follow="isFollow" @click="onClick" />',
  data() {
    return args;
  },
  methods: {
    onClick: action('onClick'),
  },
});

template.argTypes = {
  isFollow: {
    control: {
      type: 'boolean',
    },
  },
};

export const Default = template;
