import { h } from '../../packages/vue/dist/guide-mini-vue.esm.js';


export default {
  name: 'Child',
  setup() { },
  render() {
    return h('div', {}, [h('div', {}, 'child - props - msg: ' + this.$props.msg)])
  }
}
