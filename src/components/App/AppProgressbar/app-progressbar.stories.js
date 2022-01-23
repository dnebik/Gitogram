import AppProgressbar from '@/components/App/AppProgressbar/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AppProgressbar',
  component: { AppProgressbar },
};

const template = (args) => ({
  components: { AppProgressbar },
  template: '<app-progressbar v-bind="$data" @loaded="onLoaded" />',
  data() {
    return args;
  },
  methods: {
    onLoaded: action('onLoaded'),
  },
});

template.argTypes = {
  isRunning: {
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  time: {
    defaultValue: 6000,
    control: {
      type: 'number',
    },
  },
};

export const Default = template;
