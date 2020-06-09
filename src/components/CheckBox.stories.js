import CheckBox from "./CheckBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Forms/CheckBox",
};

export const Simple = () => ({
  render() {
    return (
      <CheckBox text="lorem ipsum" name="dummy" onChange={action("change")} />
    );
  },
});
