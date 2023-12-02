//@ts-nocheck
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";
// import "vue3-carousel/dist/carousel.css";
import veeValidatePlugins from "@/plugins/vee-validate.ts";
// import VueTheMask from "vue-the-mask";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeValidatePlugins);
// app.use(VueTheMask);
app.use(ElementPlus);
app.use(OpenLayersMap /* options */);

app.mount("#app");
