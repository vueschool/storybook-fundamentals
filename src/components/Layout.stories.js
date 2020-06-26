import Layout from "./Layout";

export default {
  title: "Layout",
};

export const simple = () => ({
  render() {
    return <Layout />;
  },
});

export const WithTextStory = () => require("./Layout.stories/WithText").default;
