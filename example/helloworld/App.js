import { h } from '../../packages/vue/dist/guide-mini-vue.esm.js';
import { Foo } from './Foo.js';

window.self = null
export const App = {
  name: 'App',
  render() {
    window.self = this
    return h('div', {
      id: 'root',
      class: ['red', 'blue'],
      onClick() {
        console.log('click');
      },
      onMousedown() {
        console.log('mousedown');
      }
    },
      // "hi," + this.msg
      [h('p', { class: 'red' }, 'hi,'), h(Foo, {
        count: 1,
        onAdd: (a, b) => {
          console.log('App add', a, b);
        },
        onAddFoo: () => {
          console.log('App add foo');
        }
      })]
    )
  },
  setup() {
    return {
      msg: 'mini-vue'
    }
  }
}
