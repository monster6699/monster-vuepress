# Hello VuePress :tada: !
[[toc]]

```ts{1,5-7}: // no-line-numbers
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```md:no-v-pre
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```
@[code{1-5} ts{3}](./.vuepress/client.ts)

一加一等于： {{ 1 + 1 }}

<div v-for="i in 3"> span: {{ i }} </div>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

![image](/image/a.png)

