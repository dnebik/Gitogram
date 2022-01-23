import AppProgressbar from '@/components/App/AppProgressbar/index';

export default {
  title: 'AppProgressbar',
  component: { AppProgressbar },
};

const template = (args) => ({
  components: { AppProgressbar },
  template: '<app-progressbar v-bind="$data" />',
  data() {
    return args;
  },
});

template.argTypes = {
  isRunning: {
    control: {
      type: 'boolean',
    },
  },
};

export const Default = template;
