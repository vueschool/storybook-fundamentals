import CheckBox from "./CheckBox";

export default {
  title: "Forms/CheckBox",
};

export const Simple = () => ({
  render() {
    return <CheckBox text="lorem ipsum" name="dummy" />;
  },
});
