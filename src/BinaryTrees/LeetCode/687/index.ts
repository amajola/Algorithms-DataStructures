import { TreeNode } from "../tree_utils/index.ts";

function longestUnivaluePath(root: TreeNode | null): number {
  let ans = 0;
  const max = (left: number, right: number) => {
    return right > left ? right : left;
  };
  function solve(root: TreeNode | null, parent: number) {
    if (!root) return 0;

    const left_sub = solve(root.left, root.val);
    const right_sub = solve(root.right, root.val);
    ans = max(ans, left_sub + right_sub)
    return root.val === parent ? max(left_sub, right_sub) + 1 : 0;
  }

  solve(root, -1);
  return ans;
}
