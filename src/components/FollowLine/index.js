import AppStory from '@/components/App/AppStory';

export default {
  name: 'FollowLine',
  components: { AppStory },
  data() {
    return {
      users: ['John', 'Mike', 'Andrew', 'Camille Astros', 'Piter', 'Can', 'Dielf', 'San', 'Anderson', 'Wilem', 'Sallie'],
      shadowVisibleRange: 20,
    };
  },
  mounted() {
    this.checkShadows();
  },
  methods: {
    onScroll() {
      this.checkShadows();
    },
    checkShadows() {
      const { scrollLeft, clientWidth, scrollWidth } = this.$el;
      const scrollRight = scrollWidth - clientWidth - scrollLeft;

      const { shadowLeft, shadowRight } = this.$refs;
      shadowLeft.style.opacity = String(
        (((this.shadowVisibleRange / 100) * scrollLeft) / 10).toFixed(1),
      );
      shadowRight.style.opacity = String(
        (((this.shadowVisibleRange / 100) * scrollRight) / 10).toFixed(1),
      );
    },
  },
};
