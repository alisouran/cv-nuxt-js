const yearsDiffMixin = {
  methods: {
    yearsDiff: (date = "07-04-2016") => {
      const oldDate: any = new Date(date);
      const newDate: any = new Date();
      return (
        Math.ceil(
          ((newDate - oldDate) / (1000 * 60 * 60 * 24 * 30 * 12)) * 10
        ) / 10
      );
    }
  }
};

export default yearsDiffMixin;
