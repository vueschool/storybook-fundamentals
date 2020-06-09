import LimitedInput from "./LimitedInput";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Forms/LimitedInput",
  decorators: [() => "<div class='m-4'><story/></div>", withKnobs],
};

export const SimpleStory = () => ({
  render() {
    return <LimitedInput />;
  },
});

SimpleStory.story = {
  name: "Simple Story (bis)",
};

export const VariableLimit = () => ({
  props: {
    limit: { default: number("Variable Limit", 12) },
  },
  render() {
    return <LimitedInput value="Hello VueSchools" limit={this.limit} />;
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
