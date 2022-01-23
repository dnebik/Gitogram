import AppStory from '@/components/App/AppStory';
import moment from 'moment';

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
    await this.loadPopularRepos();
  },
  methods: {
    async loadPopularRepos() {
      const date = moment()
        .add(-1, 'w')
        .format('YYYY-MM-DD');
      const { data } = await this.$api.get('/search/repositories', {
        params: {
          sort: 'stars',
          q: `language:javascript created:>=${date}`,
          per_page: 10,
          page: this.page++,
        },
      });
      console.log(data);
    },
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
