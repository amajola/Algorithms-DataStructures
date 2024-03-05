import { TreeNode, createTree } from "../tree_utils/index.ts";

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === val) {
    console.log(root.val, val)
    return root;
  }

  if (root.val < val && root.right) {
    return searchBST(root.right, val);
  } else if (root.val > val && root.right) {
    return searchBST(root.right, val);
  }
  return null;
}
