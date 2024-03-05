export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const insert_node = (root: TreeNode, element: number) => {
  if (root.val < element) {
    if (root.left === null) {
      root.left = new TreeNode(element, null, null);
      return;
    }
    insert_node(root.left, element);
  } else if (root.val > element) {
    if (root.right === null) {
      root.right = new TreeNode(element, null, null);
      return;
    }
    insert_node(root.right, element);
  }
};

export function createTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift()!;

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}
