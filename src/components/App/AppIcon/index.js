const sizes = {
  small: 16,
  normal: 32,
  big: 64,
};

export default {
  name: 'AppIcon',
  props: {
    small: { type: Boolean, default: false },
    big: { type: Boolean, default: false },
    size: { type: Number, default: 0 },
  },
  data() {
    return {
      svg: '',
    };
  },
  async mounted() {
    await this.load_svg();
  },
  computed: {
    svgSize() {
      if (this.big) { return `${sizes.big}px`; }
      if (this.small) { return `${sizes.small}px`; }
      if (this.size) { return `${this.small}px`; }
      return `${sizes.normal}px`;
    },
  },
  methods: {
    async load_svg() {
      try {
        const text = String(this.$refs.slot.textContent).replaceAll(' ', '');
        this.svg = (await import(/* webpackMode: "eager" */ `@/components/App/AppIcon/svg/${text}.svg`))?.default;
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
