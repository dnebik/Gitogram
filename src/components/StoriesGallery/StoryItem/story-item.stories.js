import StoryItem from '@/components/StoriesGallery/StoryItem/index';

export default {
  title: 'StoryItem',
  component: { StoryItem },
};

const template = (args) => ({
  components: { StoryItem },
  template: '<story-item :active="active"/>',
  data() {
    return {
      ...args,
    };
  },
});

template.argTypes = {
  active: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const Default = template;
