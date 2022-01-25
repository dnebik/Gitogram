import AppStory from '@/components/App/AppStory';
import { mapState } from 'vuex';

export default {
  name: 'FollowLine',
  components: { AppStory },
  data() {
    return {
      users: ['John', 'Mike', 'Andrew', 'Camille Astros', 'Piter', 'Can', 'Dielf', 'San', 'Anderson', 'Wilem', 'Sallie'],
      shadowVisibleRange: 20,
      page: 1,
    };
  },
  async mounted() {
    this.checkShadows();
    await this.$store.dispatch('repos/load');
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos,
    }),
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
