import { NodeTypes, createVNodeCall } from "../ast";

export function transformElement(node, context) {
  if (node.type === NodeTypes.ELEMENT) {

    return () => {
      // 没有实现block，直接创建element

      // tag
      const vnodeTag = `'${node.tag}'`
      // TODO:props 暂时不支持
      let vnodeProps;
      // children
      // const children = node.children
      // let vnodeChildren = children[0]

      let vnodeChildren = null
      if (node.children.length > 0) {
        if (node.children.length === 1) {
          // 只有一个孩子节点，那么当生成render函数的时候不用 []包裹
          const child = node.children[0]
          vnodeChildren = child
        }
      }

      // 创建一个新的node，用于codegen 的时候使用
      node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren)
    }

  }

}
