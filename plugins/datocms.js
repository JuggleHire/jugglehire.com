
import {
  DatocmsStructuredTextPlugin,
  DatocmsImagePlugin,
  StructuredText,
  Image,
} from "vue-datocms";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DatocmsImagePlugin, DatocmsStructuredTextPlugin);
  nuxtApp.vueApp.component("structured-text", StructuredText);
  nuxtApp.vueApp.component("dato-image", Image);
});
