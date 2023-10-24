import { h, ref } from '../../packages/vue/dist/guide-mini-vue.esm.js';
import Child from './Child.js'

export const App = {
  name: 'App',
  setup() {
    const count = ref(1)
    const msg = ref('123')
    window.msg = msg
    const changeCount = () => {
      count.value++
    }

    const changeChildProps = () => {
      msg.value = '456'
    }

    window.msg = msg

    return {
      msg,
      count,
      changeCount,
      changeChildProps,
    }
  },
  render() {
    return h('div', {
      id: 'root',
    },
      [
        h('button',
          {
            onClick: this.changeChildProps
          },
          'change child props'),
        h(Child,
          {
            msg: this.msg
          },
        ),
        h('button', {
          onClick: this.changeCount
        }, 'change self count'),
        h('p', {}, 'count:' + this.count)
      ]
    )
  }
}
