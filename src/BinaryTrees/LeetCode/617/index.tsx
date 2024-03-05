import { TreeNode, createTree } from "../tree_utils/index.ts";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null,
): TreeNode | null {
  if (!root1 && !root2) return null;
  console.log(root1?.val, root2?.val);
  const root_node = new TreeNode(
    (root2 ? root2?.val : 0) + (root1 ? root1.val : 0),
    null,
    null,
  );

  root_node.left = mergeTrees(root1?.left, root2?.left);
  root_node.right = mergeTrees(root1?.right, root2?.right);
  return root_node;
}

const root1 = {
  val: 1,
  left: { val: 3, left: { val: 5, left: null, right: null } },
  right: { val: 2, left: null, right: null },
} as TreeNode;
const root2 = {
  val: 2,
  left: { val: 1, left: null, right: { val: 4, left: null, right: null } },
  right: { val: 3, left: { val: 7, left: null, right: null }, right: null },
} as TreeNode;
const root_node = mergeTrees(root1, root2);
console.log(root_node);
