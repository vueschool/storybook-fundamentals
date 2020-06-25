import NavMenu from "./NavMenu";
import StoryRouter from "storybook-vue-router";

export default {
  title: "NavMenu",
  decorators: [StoryRouter()],
};

export const simple = () => ({
  render() {
    return <NavMenu />;
  },
});
