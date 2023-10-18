import { h, renderSlots } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const Foo = {
  name: 'Foo',
  setup(props) {
    console.log(props);
    return {}
  },
  render() {
    const foo = h('p', {}, 'foo')
    const age = 18
    return h('div', {}, [
      renderSlots(this.$slots, 'header', {
        age
      }),
      foo,
      renderSlots(this.$slots, 'footer')])
  },
}
