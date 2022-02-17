import FollowProfile from '@/components/FollowProfile/index';
import image from '@/assets/img/avatar/avatar_1.png';

export default {
  title: 'FollowProfile',
  component: { FollowProfile },
};

const template = (args) => ({
  components: { FollowProfile },
  template: '<follow-profile v-bind="$data" />',
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
  followStatus: {
    name: 'Тип кнопки',
    type: { name: 'string', required: false },
    control: {
      type: 'select',
      options: ['followed', 'unfollowed', 'loading'],
    },
    defaultValue: 'unfollowed',
  },
};

export const Default = template;
