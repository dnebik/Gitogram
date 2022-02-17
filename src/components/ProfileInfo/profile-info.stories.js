import ProfileInfo from '@/components/ProfileInfo/index';
import image from '@/assets/img/avatar/avatar_1.png';

export default {
  title: 'ProfileInfo',
  component: { ProfileInfo },
};

const template = (args) => ({
  components: { ProfileInfo },
  template: '<profile-info v-bind="$data" />',
  data() {
    return { ...args };
  },
});

template.argTypes = {
  name: {
    name: 'Имя',
    defaultValue: 'Данила Небренчин',
    control: {
      type: 'text',
    },
  },
  login: {
    name: 'Логин',
    defaultValue: 'dnebik',
    control: {
      type: 'text',
    },
  },
  avatarSrc: {
    name: 'Ссылка',
    defaultValue: image,
    control: {
      type: 'text',
    },
  },
  repos: {
    name: 'Количество репозиториев',
    defaultValue: 40,
    control: {
      type: 'number',
    },
  },
  follows: {
    name: 'Количество подписок',
    defaultValue: 9,
    control: {
      type: 'number',
    },
  },
  small: {
    name: 'Уменьшенная версия',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const Default = template;
