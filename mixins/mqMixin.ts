const mqMixin = {
  data() {
    return {
      windowWidth: 0 as number,
      windowHeight: 0 as number,
      mobile: false as boolean,
      tablet: false as boolean,
    };
  },
  methods: {
    getWindowWidth() {
      this.windowWidth =
        window.innerWidth ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    },
    getWindowHeight() {
      this.windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    },
  } as any,
  mounted() {
    document.addEventListener('resize', this.getWindowHeight());
    document.addEventListener('resize', this.getWindowWidth());
    this.mobile = this.windowWidth < 550;
    this.tablet = 550 < this.windowWidth && this.windowWidth < 770;
  },
  updated(){
    this.mobile = this.windowWidth < 550;
    this.tablet = 550 < this.windowWidth && this.windowWidth < 770;
  },
  destroyed() {
    document.removeEventListener('resize', this.getWindowWidth());
    document.removeEventListener('resize', this.getWindowHeight());
  },
} as any;

export default mqMixin;
