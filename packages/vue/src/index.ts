
export * from '@hky-vue/runtime-dom'
import { baseCompiler } from '@hky-vue/compiler-core';
import * as runtimeDom from '@hky-vue/runtime-core'
import { registerRuntimeCompiler } from '@hky-vue/runtime-core';

function compileToFunction(template) {
  const { code } = baseCompiler(template)

  // 调用 compile 得到的代码在给封装到函数内，
  // 这里会依赖 runtimeDom 的一些函数，通过参数的形式注入进去
  const render = new Function('Vue', code)(runtimeDom)
  return render
}

registerRuntimeCompiler(compileToFunction)
