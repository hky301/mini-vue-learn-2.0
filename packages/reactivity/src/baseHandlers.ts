import { track, trigger } from "./effect"

function createGetter(isReadonly = false) {
  return function get(target, key) {
    const res = Reflect.get(target, key)
    if (!isReadonly) {
      track(target, key)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value) {
    const res = Reflect.set(target, key, value);

    trigger(target, key)
    return res
  }
}

const get = createGetter()
const set = createSetter()
const readonlyGet = createGetter(true)

export const mutableHandlers = {
  get,
  set
}

export const readonlyHandlers = {
  get: readonlyGet,
  set(target, key, value) {
    console.warn(`key:${key} set 失败，因为target 是 readonly`, target);
    return true
  }
}
