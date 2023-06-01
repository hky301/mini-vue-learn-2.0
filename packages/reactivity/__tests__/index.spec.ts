import { add } from '../src/index';
import { isObject } from '@hky-vue/shared';

describe('Name of the group', () => {
  it('init', () => {
    expect(true).toBe(true)
    expect(add(1, 1)).toBe(2)
    expect(isObject(1)).toBe(false)
  })
});

