import { h, ref } from '../../packages/vue/dist/guide-mini-vue.esm.js';

export const App = {
  name: 'App',
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value++
    }
    const props = ref({
      foo: 'foo',
      bar: 'bar'
    })
    const onChangePropsDemo1 = () => {
      props.value.foo = 'new-foo'
    }
    const onChangePropsDemo2 = () => {
      props.value.foo = undefined
    }
    const onChangePropsDemo3 = () => {
      props.value = {
        foo: 'foo'
      }
    }
    return {
      count,
      props,
      onClick,
      onChangePropsDemo1,
      onChangePropsDemo2,
      onChangePropsDemo3
    }
  },
  render() {
    return h('div', {
      id: 'root',
      ...this.props
    },
      [
        h('div', { class: 'red' }, 'count:' + this.count),
        h('button', {
          onClick: this.onClick
        }, 'click'),
        h('button', { onClick: this.onChangePropsDemo1 }, 'changeProps - 值修改了 - 修改'),
        h('button', { onClick: this.onChangePropsDemo2 }, 'changeProps - 值变成了undefined - 删除'),
        h('button', { onClick: this.onChangePropsDemo3 }, 'changeProps - key在新的里面没有了 - 删除')
      ]
    )
  }
}
