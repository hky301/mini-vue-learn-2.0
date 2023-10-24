import { h, ref, getCurrentInstance, nextTick } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const App = {
  name: 'App',
  setup() {
    const count = ref(1)
    const instance = getCurrentInstance()

    const changeCount = () => {
      for (let i = 0; i < 100; i++) {
        console.log('update');
        count.value = i
      }

      console.log(instance);
      nextTick(() => {
        console.log(instance);
      })
    }

    return {
      count,
      changeCount,
    }
  },
  render() {
    const button = h('button',
      {
        onClick: this.changeCount
      }, 'update')
    const p = h('p', {}, 'count:' + this.count)

    return h('div', {
      id: 'root',
    },
      [
        button, p
      ]
    )
  }
}
