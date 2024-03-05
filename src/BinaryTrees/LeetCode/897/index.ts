import { TreeNode, createTree, insert_node } from "../tree_utils/index.ts";

function return_numbers(root: TreeNode | null, arr: Array<number>) {
  if (root === null) {
    return null;
  }
  const left = return_numbers(root.left, arr);
  console.log(left)
  if (left) {
    console.log(left)
  }
  arr.push(root.val);
  return_numbers(root.right, arr);

  return root
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  const arr_of_tree_values = return_numbers(root, []) ?? [];

  return tree;
}

const tree = createTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]);
increasingBST(tree);
