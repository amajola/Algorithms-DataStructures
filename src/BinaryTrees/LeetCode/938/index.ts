import { TreeNode } from '../tree_utils/index.ts';

const add_nodes_number = (
  node: TreeNode | null,
  total: number,
  high: number,
  low: number,
) => {
  if (node === null) {
    return 0;
  } else {
    total = node?.val >= low && node?.val <= high ? node.val : 0;
  }
  const right = add_nodes_number(node?.right, 0, high, low) ?? 0;
  const left = add_nodes_number(node?.left, 0, high, low) ?? 0;

  return total + left + right;
};

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  return add_nodes_number(root, 0, high, low);
}
