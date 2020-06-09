import LimitedInput from "./LimitedInput";

export default {
  title: "Forms/LimitedInput",
  decorators: [() => "<div class='m-4'><story/></div>"],
};

export const SimpleStory = () => ({
  render() {
    return <LimitedInput />;
  },
});

SimpleStory.story = {
  name: "Simple Story (bis)",
};

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
