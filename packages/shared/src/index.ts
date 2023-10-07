export function isObject(target) {
  return typeof target === 'object' && target !== null
}

export const extend = Object.assign

export const hasChanged = (val, newValue) => {
  return !Object.is(val, newValue)
}
