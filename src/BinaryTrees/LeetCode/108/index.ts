import { TreeNode, createTree } from "../tree_utils/index.ts";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const index_of_middle_element = Math.round((nums.length - 1) / 2);
  const middle_element = nums[index_of_middle_element];
  if (nums.length <= 0) {
    return null;
  }

  const root = new TreeNode(middle_element, null, null);
  root.left = sortedArrayToBST(nums.slice(0, nums.indexOf(middle_element)));
  root.right = sortedArrayToBST(
    nums.slice(index_of_middle_element + 1, nums.length),
  );

  return root;
}

const result = sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
console.log(result)
