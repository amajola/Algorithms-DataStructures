import { TreeNode } from "./index.ts";

export interface Stack {
  node: Array<TreeNode>;
  highest_used: number;
}

export function create_stack(): Stack {
  const stack: Stack = { node: [], highest_used: -1 };
  return stack;
}

export function push_stack(stack: Stack, node: TreeNode): void {
  stack.node.push(node);
  stack.highest_used += 1;
}

export function pop_stack(Stack: Stack): TreeNode {
  const node: TreeNode = Stack.node[Stack.highest_used];
  Stack.node.pop();
  Stack.highest_used -= 1;
  return node;
}

export function is_empty_stack(stack: Stack) {
  return stack.highest_used = -1;
}
