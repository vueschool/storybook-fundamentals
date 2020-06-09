import LimitedInput from "./LimitedInput";
import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Forms/LimitedInput",
  decorators: [() => "<div class='m-4'><story/></div>", withKnobs],
  parameters: {
    notes: `
# LimitedInput use case

Use this component for the *Id* field of a sign-up box.
Since it's changing color when the value becomes too long, 
it will gently hint users to reduce the size of their *Id* before they hit submit.
  `,
  },
};

export const SimpleStory = () => ({
  render() {
    return <LimitedInput />;
  },
});

SimpleStory.story = {
  name: "Simple Story (bis)",
  parameters: {
    notes: `
    This is the simplest story
    `,
  },
};

export const StoryForActions = () => ({
  render() {
    return <LimitedInput onInput={action("input")} />;
  },
});

export const StoryForLinks = () => ({
  render() {
    return (
      <button onClick={linkTo("Forms/LimitedInput", "Story For Actions")}>
        Link
      </button>
    );
  },
});

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
