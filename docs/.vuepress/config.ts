import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
    locales: {
      "/en/": {
        selectLanguageName: "English",
      },
      "/": {
        selectLanguageName: "简体中文",
      },
    },
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
    "/en/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
  },
});
