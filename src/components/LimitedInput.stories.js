import LimitedInput from "./LimitedInput";

export default {
  title: "LimitedInput",
};

export const Simple = () => ({
  render() {
    return <LimitedInput />;
  },
});

export const simpleWithTemplate = () => ({
  components: { LimitedInput },
  template: "<LimitedInput />",
});

export const withAValue = () => ({
  render() {
    return <LimitedInput value="test" />;
  },
});

export const ValueTooLong = () => ({
  render() {
    return <LimitedInput value="test VueSchool" />;
  },
});
