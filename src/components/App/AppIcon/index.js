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
    fill: { type: String, default: null },
    stroke: { type: String, default: null },
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
    styles() {
      return {
        ...(this.fill ? { fill: this.fill } : {}),
      };
    },
  },
  methods: {
    async load_svg() {
      try {
        const text = String(this.$refs.slot.textContent).replaceAll(' ', '');
        this.svg = (await import(/* webpackMode: "eager" */ `@/components/App/AppIcon/svg/${text}.svg`))?.default;

        await this.$nextTick(() => {
          this.setColors();
        });
      } catch (e) {
        console.log(e.message);
      }
    },
    setColors() {
      const { wrapper } = this.$refs;
      const svg = wrapper.querySelector('svg');
      if (svg && (this.fill || this.stroke)) {
        const child = svg.childNodes;
        child.forEach((childNode) => {
          const stroke = childNode.getAttribute('stroke');
          const fill = childNode.getAttribute('fill');
          if (this.fill && fill && fill !== 'none') { childNode.setAttribute('fill', this.fill); }
          if (this.stroke && stroke && stroke !== 'none') { childNode.setAttribute('stroke', this.stroke); }
        });
      }
    },
  },
};
