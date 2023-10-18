import { h } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const Foo = {
  name: 'Foo',
  setup(props) {
    console.log(props);
    // readonly
    // props.count++
  },
  render() {
    return h('div', {}, 'foo:' + this.count)
  },
}
