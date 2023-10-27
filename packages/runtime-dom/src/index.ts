
export * from '@hky-vue/runtime-core'

import { createRenderer } from '@hky-vue/runtime-core'
import { isOn } from '@hky-vue/shared'

function createElement(type) {
  return document.createElement(type)
}

function patchProp(el, key, prevVal, nextVal) {
  if (isOn(key)) {
    // TODO:卸载事件的逻辑
    // const event = key.slice(2).toLowerCase()
    // el.addEventListener(event, nextVal)

    // 查看mini-vue的实现
    // 添加和删除的必须是一个函数
    const invokers = el._vei || (el._vei = {})
    const existingInvoker = invokers[key]
    if (nextVal && existingInvoker) {
      // 直接修改函数的值
      existingInvoker.value = nextVal
    } else {
      const eventName = key.slice(2).toLowerCase()
      if (nextVal) {
        const invoker = (invokers[key] = nextVal)
        el.addEventListener(eventName, invoker)
      } else {
        el.removeEventListener(eventName, existingInvoker)
        invokers[key] = undefined
      }
    }

  } else {
    if (nextVal === undefined || nextVal === null) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, nextVal)
    }
  }
}

function insert(child, parent, anchor) {
  parent.insertBefore(child, anchor || null)
}

function remove(child) {
  const parent = child.parentNode
  if (parent) {
    parent.removeChild(child)
  }
}

function setElementText(el, text) {
  el.textContent = text
}

let renderer


function ensureRenderer() {
  return renderer || (renderer = createRenderer({
    createElement,
    patchProp,
    insert,
    remove,
    setElementText
  }))
}

export function createApp(...args) {
  return ensureRenderer().createApp(...args)
}
