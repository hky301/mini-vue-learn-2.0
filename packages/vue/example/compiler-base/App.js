import { h, ref } from '../../dist/guide-mini-vue.esm.js';

export const App = {
  name: 'App',
  setup() {
    const count = ref(0)

    window.count = count

    return {
      count,
    }
  },
  template: `<p>hi,{{count}}</p>`,
}
