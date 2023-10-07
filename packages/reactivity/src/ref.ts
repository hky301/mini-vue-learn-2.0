import { hasChanged, isObject } from "@hky-vue/shared"
import { isTracking, trackEffects, triggerEffects } from "./effect"
import { reactive } from "./reactive"

class RefImpl {
  private _rawValue
  private _value
  public dep

  constructor(value) {
    this._rawValue = value
    this._value = convert(value)
    this.dep = new Set()
  }

  get value() {
    trackRefValue(this)
    return this._value
  }

  set value(newValue) {
    if (hasChanged(this._rawValue, newValue)) {
      // 一定要先修改 value
      this._rawValue = newValue
      this._value = convert(newValue)
      triggerEffects(this.dep)
    }
  }
}

function convert(value) {
  return isObject(value) ? reactive(value) : value
}

export function trackRefValue(ref) {
  if (isTracking()) {
    trackEffects(ref.dep)
  }
}

export function ref(value) {
  return new RefImpl(value)
}
