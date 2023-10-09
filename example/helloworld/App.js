import { h } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const App = {
  name: 'App',
  render() {
    return h('div', "hi," + this.msg)
  },
  setup() {
    return {
      msg: 'mini-vue'
    }
  }
}
