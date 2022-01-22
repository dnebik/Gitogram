import AppIcon from './index';

const files = [];
const context = require.context('./svg/', false);
context.keys().forEach((r) => {
  files.push(r
    .replace('.svg', '')
    .replace('./', ''));
});

export default {
  title: 'AppIcon',
  component: { AppIcon },
};

const template = (args) => ({
  components: { AppIcon },
  template: `<app-icon>${args.icon}</app-icon>`,
});

template.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: files,
      selected: files[0],
    },
  },
};

export const Default = template;
