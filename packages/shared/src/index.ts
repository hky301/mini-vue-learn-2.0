export function isObject(target) {
  return typeof target === 'object' && target !== null
}

export function isString(value) {
  return typeof value === 'string'
}

export const extend = Object.assign

export const hasChanged = (val, newValue) => {
  return !Object.is(val, newValue)
}

export { ShapeFlags } from './ShapeFlags'

export const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key)

// 烤肉串命名方法转换成驼峰命名方式
export const camelize = (str: string) => {
  return str.replace(/-(\w)/g, (_, c: string) => {
    return c ? c.toUpperCase() : ''
  })
}

// 必须是 on + 一个大写字母的格式开头
export const isOn = (key: string) => /^on[A-Z]/.test(key)

// 首字母大写
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// 添加 on 前缀，并且首字母大写
export const toHandlerKey = (str: string) => {
  return str ? 'on' + capitalize(str) : ''
}

export const EMPTY_OBJ = {}

export * from './toDisplayString'
