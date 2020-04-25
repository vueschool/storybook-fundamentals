import { action } from "@storybook/addon-actions";

import LimitedInput from "./LimitedInput.vue";

export default {
  title: "LimitedInput",
  component: LimitedInput,
};

export const Simple = () => ({
  components: { LimitedInput },
  template: `<div class="m-3">
    <LimitedInput />
  </div>`,
});

export const WithAnInitValue = () => ({
  components: { LimitedInput },
  template: `<div class="m-3">
    <LimitedInput value="init" />
  </div>`,
});

export const Overflow = () => ({
  components: { LimitedInput },
  template: `<div class="m-3">
  <LimitedInput value="Lorem ipsum dolor sit amet" />
</div>`,
  methods: { action: action("clicked") },
});
