import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog-vue/",

  lang: "zh-CN",
  title: "郑天祺的博客",
  description: "郑天祺的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
