import { h } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const App = {
  name: 'App',
  render() {
    return h('div', {
      id: 'root',
      class: ['red', 'blue']
    }, [
      h('p', { class: 'red' }, 'hi,'), h('p', { class: 'blue' }, 'mini-vue')
    ])
  },
  setup() {
    return {
      msg: 'mini-vue'
    }
  }
}
