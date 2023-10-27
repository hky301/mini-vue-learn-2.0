
export * from '@hky-vue/runtime-dom'
import { baseCompiler } from '@hky-vue/compiler-core';
import * as runtimeDom from '@hky-vue/runtime-core'
import { registerRuntimeCompiler } from '@hky-vue/runtime-core';

function compileToFunction(template) {
  const { code } = baseCompiler(template)

  const render = new Function('Vue', code)(runtimeDom)
  return render
}

registerRuntimeCompiler(compileToFunction)
