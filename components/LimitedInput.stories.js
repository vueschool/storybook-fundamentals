import LimitedInput from "./LimitedInput";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Forms/LimitedInput",
  decorators: [() => "<div class='m-4'><story/></div>"],
  parameters: {
    notes: `
    # LimitedInput
    
    A good use case for this component is the *Id* field of a sign-up box.
    Since it's changing color when the value becomes too long, 
    it will hint users gently to reduce the size of their *Id*.`
  }
};

export const SimpleStory = () => ({
  render() {
    return <LimitedInput />;
  }
});

SimpleStory.story = {
  name: "Simple Story (bis)",

  parameters: {
    notes: `
  This is the simplest story
  `
  }
};

export const StoryForActions = () => ({
  render() {
    return <LimitedInput onInput={action("input")} />;
  }
});

export const StoryForLinks = () => ({
  render() {
    return (
      <button onClick={linkTo("Forms/LimitedInput", "Story For Actions")}>
        Link
      </button>
    );
  }
});

export const simpleWithTemplate = () => ({
  components: { LimitedInput },
  template: "<LimitedInput />"
});

export const withAValue = () => ({
  render() {
    return <LimitedInput value="test" />;
  }
});

export const ValueTooLong = () => ({
  render() {
    return <LimitedInput value="test VueSchool" />;
  }
});
