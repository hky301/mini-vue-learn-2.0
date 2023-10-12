import { isObject } from "@hky-vue/shared"
import { createComponentInstance, setupComponent } from "./component"

export function render(vnode, container) {
  patch(vnode, container)
}

function patch(vnode, container) {

  // 区分是element 还是 component 类型
  if (typeof vnode.type === 'string') {
    processElement(vnode, container)
  } else if (isObject(vnode.type)) {
    processComponent(vnode, container)
  }
}

function processElement(vnode, container) {
  mountElement(vnode, container)
}

function mountElement(vnode, container) {
  const el = (vnode.el = document.createElement(vnode.type))
  const { children, props } = vnode
  if (typeof children === 'string') {
    el.textContent = children
  } else if (Array.isArray(children)) {
    mountChildren(vnode, el)
  }

  for (const key in props) {
    const val = props[key]
    el.setAttribute(key, val)
  }

  container.append(el)
}

function mountChildren(vnode, container) {
  vnode.children.forEach(v => {
    patch(v, container)
  })
}

function processComponent(vnode, container) {
  mountComponent(vnode, container)
}

function mountComponent(initialVnode, container) {
  // 创建组件实例
  const instance = createComponentInstance(initialVnode)
  // 处理setup函数
  setupComponent(instance)
  setupRenderEffect(instance, initialVnode, container)
}

function setupRenderEffect(instance, initialVnode, container) {
  const { proxy } = instance
  const subTree = instance.render.call(proxy)

  // patch
  patch(subTree, container)
  initialVnode.el = subTree.el
}

