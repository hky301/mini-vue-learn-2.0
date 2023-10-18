export function isObject(target) {
  return typeof target === 'object' && target !== null
}

export const extend = Object.assign

export const hasChanged = (val, newValue) => {
  return !Object.is(val, newValue)
}

export { ShapeFlags } from './ShapeFlags'

export const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key)
