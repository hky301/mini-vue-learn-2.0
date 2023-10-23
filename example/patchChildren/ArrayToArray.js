import { h, ref } from '../../packages/vue/dist/guide-mini-vue.esm.js';

const prevChildren = [
  h('div', { key: 'A' }, 'A'),
  h('div', { key: 'B' }, 'B')
]
const nextChildren = [
  h('div', {}, 'A'),
  h('div', {}, 'B'),
  h('div', {}, 'C'),
]

export default {
  name: 'ArrayToArray',
  setup() {
    const isChange = ref(false)
    window.isChange = isChange
    return {
      isChange
    }
  },
  render() {
    const self = this
    return self.isChange ? h('div', {}, nextChildren) : h('div', {}, prevChildren)
  }
}
