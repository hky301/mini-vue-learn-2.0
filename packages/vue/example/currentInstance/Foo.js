import { h, getCurrentInstance } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const Foo = {
  name: 'Foo',
  setup() {
    const instance = getCurrentInstance()
    console.log('Foo:', instance);
    return {}
  },
  render() {
    const foo = h('p', {}, 'foo')
    return h('div', {}, [
      foo
    ])
  },
}
