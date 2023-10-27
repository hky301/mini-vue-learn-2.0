export const enum ShapeFlags {
  // 渲染的是element类型
  ELEMENT = 1, // 0001
  // 组件类型
  STATEFUL_COMPONENT = 1 << 1, // 0010
  // vnode 的 children 是 string 类型
  TEXT_CHILDREN = 1 << 2, // 0100
  // vnode 的 children 是 array 类型
  ARRAY_CHILDREN = 1 << 3, // 1000
  // vnode 的 children 是 slots 类型
  SLOT_CHILDREN = 1 << 4
}
