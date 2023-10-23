import { h, ref } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const App = {
  name: 'App',
  render() {
    return h('div', {
      id: 'root',
    },
      [
        h('div', { class: 'red' }, 'count:' + this.count),
        h('button', {
          onClick: this.onClick
        }, 'click')
      ]
    )
  },
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value++
    }
    return {
      count,
      onClick
    }
  }
}
