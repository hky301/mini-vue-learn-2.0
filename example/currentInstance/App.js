import { h, getCurrentInstance } from '../../packages/vue/dist/guide-mini-vue.esm.js';
import { Foo } from './Foo.js';

export const App = {
  name: 'App',
  render() {
    return h('div', {
      id: 'root',
      class: ['red', 'blue'],
    }, [h('p', {}, 'currentInstance demo'), h(Foo)])
  },
  setup() {
    const instance = getCurrentInstance()
    console.log('App:', instance);
  }
}
