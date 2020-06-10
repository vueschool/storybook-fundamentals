import { addDecorator } from "@storybook/vue";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import "@mdi/font/css/materialdesignicons.css";
import vuetifyOptions from "../vuetify.options";

Vue.use(Vuetify);

addDecorator(() => ({
  vuetify: new Vuetify(vuetifyOptions),
  template: `
      <v-app>
        <story/>
      </v-app>
    `
}));
