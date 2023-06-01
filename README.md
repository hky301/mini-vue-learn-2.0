# mini-vue-learn-2.0
vue3-第二次学习

pnpm init
tsc --init
pnpm add --save-dev jest @types/jest
pnpm add --save-dev babel-jest @babel/core @babel/preset-env
pnpm add --save-dev @babel/preset-typescript


## ​改造成monorepo

pnpm i @hky-vue/shared -F reactivity
pnpm i @hky-vue/shared @hky-vue/reactivity -F runtime-core  或  pnpm i @hky-vue/shared @hky-vue/reactivity --filter @hky-vue/runtime-core
pnpm i @hky-vue/runtime-core -F runtime-dom
pnpm i @hky-vue/shared -F compiler-core

pnpm i @hky-vue/runtime-dom @hky-vue/compiler-core -F hky-vue



TODO:rollup打包配置修改

```js
import typescript from '@rollup/plugin-typescript';

export default {
  input: './packages/vue/src/index.ts',
  output: [
    {
      format: 'cjs',
      file: "packages/vue/dist/guide-mini-vue.cjs.js",
    }, {
      format: 'es',
      file: "packages/vue/dist/guide-mini-vue.esm.js",
    }
  ],
  plugins: [typescript()]
}
```

pnpm i vitest -D -w

jest.fn -> vi.fn
