import { createTree, TreeNode } from "../tree_utils/index.ts";

function maxPathSum(root: TreeNode | null): number {
  let ans: number = root?.val;
  const max = (left: number, right: number) => {
    return right > left ? right : left;
  };

  function find_max_path(root: TreeNode | null, current_value: number = NaN) {
    if (!root) return -1001;

    const left_value = find_max_path(root.left);
    const right_value = find_max_path(root.right);


    // Checking left + right and then adding them and the root at the end
    console.log(left_value + right_value > max(left_value, right_value) ? left_value + right_value : max(left_value, right_value))
    ans = max(
      ans,
      left_value + right_value + root.val > root.val ? left_value + right_value + root.val : root.val + max(left_value, right_value),
    );
    // ans = max(ans, left_value);

    return root.val + current_value > max(root.val, current_value)
      ? root.val + current_value
      : max(root.val, current_value);
  }

  find_max_path(root, 0);
  return ans;
}

const opt = maxPathSum(createTree([-3, -2, -1]));
// const opt2 = maxPathSum(createTree([1, 2]));
// const opt3 = maxPathSum(createTree([-10, 9, 20, null, null, 15, 7]));
// const opt4 = maxPathSum(createTree([-3]));
// const opt5 = maxPathSum(createTree([1, 2, null, 3, null, 4, null, 5]));
// const opt6 = maxPathSum(createTree([1, 2, 3]));
// const opt7 = maxPathSum(createTree([1, null, 2, null, 3, null, 4, null, 5]));
console.log(opt);
// console.log(opt, opt2, opt3, opt4, opt5, opt6, opt7);
