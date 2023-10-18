import { h } from '../../packages/vue/dist/guide-mini-vue.esm.js';
import { Foo } from './Foo.js';

window.self = null
export const App = {
  name: 'App',
  render() {
    window.self = this

    const app = h('div', {}, 'App')
    const foo = h(Foo, {}, {
      header: ({ age }) => h('p', {}, 'header' + age),
      footer: () => h('div', {}, 'footer')
    })

    return h('div', {
      id: 'root',
      class: ['red', 'blue'],
    },
      [app, foo]
    )
  },
  setup() {
    return {
      msg: 'mini-vue'
    }
  }
}
