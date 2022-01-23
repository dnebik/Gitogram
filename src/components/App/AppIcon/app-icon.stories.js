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
    name: 'Иконка',
    type: { name: 'string', required: false },
    control: {
      type: 'select',
      options: files,
    },
    defaultValue: files[0],
  },
};

export const Default = template;
