import { createApp } from "vue";
import "tw-elements";
import "./tailwind.css";
import VueVirtualScroller from "vue-virtual-scroller";
import App from "./App.vue";

const app = createApp(App);

app.use(VueVirtualScroller);
app.mount("#app");
