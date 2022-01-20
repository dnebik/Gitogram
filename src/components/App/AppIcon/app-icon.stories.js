import AppIcon from './index';

const files = require.context('./svg/', false);
console.log(files);

export default {
  title: 'AppIcon',
  component: { AppIcon },
};

const template = () => ({
  components: { AppIcon },
  template: '<app-icon>home</app-icon>',
});

export const Default = template;
