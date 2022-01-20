import AppIcon from './index';

export default {
  title: 'AppIcon',
  component: { AppIcon },
};

const template = () => ({
  components: { AppIcon },
  template: '<app-icon>home</app-icon>',
});

export const Default = template;
