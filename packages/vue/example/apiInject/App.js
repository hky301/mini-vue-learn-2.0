import { h, provide, inject } from '../../packages/vue/dist/guide-mini-vue.esm.js';

const Provider = {
  name: 'Provider',
  setup() {
    provide('foo', 'fooVal')
    provide('bar', 'barVal')
  },
  render() {
    return h('div', {}, [h('p', {}, "Provider"), h(ProviderTwo)])
  }
}

const ProviderTwo = {
  name: 'Provider',
  setup() {
    provide('foo', 'fooTwoVal')
    provide('bar', 'barTwoVal')
    const foo = inject('foo')
    const bar = inject('bar')
    return {
      foo,
      bar
    }
  },
  render() {
    return h('div', {}, [h('p', {}, "ProviderTwo-" + this.foo + '-' + this.bar), h(Consumer)])
  }
}

const Consumer = {
  name: 'Consumer',
  setup() {
    const foo = inject('foo')
    const bar = inject('bar')
    const baz = inject('baz', 'bazDefault')
    const baz2 = inject('baz2', () => 'bazDefault2')
    return {
      foo,
      bar,
      baz,
      baz2
    }
  },
  render() {
    return h('div', {}, `Consumer: - ${this.foo} - ${this.bar} - ${this.baz} - ${this.baz2}`);
  }
}


export const App = {
  name: 'App',
  render() {
    return h(Provider)
  },
  setup() {
    return {
    }
  }
}
