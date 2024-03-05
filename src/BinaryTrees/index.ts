import { get_input } from "../Utils/input.ts";
import {
  create_stack,
  is_empty_stack,
  pop_stack,
  push_stack,
  Stack,
} from "./stack.ts";

export interface TreeNode {
  candy: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
}

function create_house(candy: number): TreeNode {
  const house: TreeNode = { candy: candy, left: null, right: null };
  return house;
}

function create_none_house(
  left_node: TreeNode,
  right_node: TreeNode,
): TreeNode {
  const non_house: TreeNode = {
    candy: null,
    left: left_node,
    right: right_node,
  };
  return non_house;
}

function tree_candy(tree: TreeNode | null): number {
  let total = 0;
  const stack: Stack = create_stack();

  while (tree !== null) {
    if (!tree.left && !tree.right) {
      stack.highest_used += 1;
      push_stack(stack, tree.right);
    } else if (tree.candy !== null) {
      total += tree.candy;
      if (is_empty_stack(stack)) {
        tree = null;
      } else {
        pop_stack(stack);
      }
    }
  }
  return total;
}
function max(value_one: number, value_two: number): number {
  if (value_one > value_two) return value_one;
  return value_two;
}

function tree_candy_recursive(node: TreeNode): number {
  if (!node.left && !node.right && node.candy) {
    return node.candy;
  }
  return (
    tree_candy_recursive(node.left as TreeNode) +
    tree_candy_recursive(node.right as TreeNode)
  );
}

function tree_height_recursive(node: TreeNode): number {
  if (!node.left && !node.right) {
    return 0;
  }
  return (
    1 +
    max(
      tree_height_recursive(node.left as TreeNode),
      tree_height_recursive(node.right as TreeNode),
    )
  );
}

function number_streets_recursive(node: TreeNode): number {
  if (!node.left && !node.right) {
    return 0;
  }
  return (
    4 +
    number_streets_recursive(node.left as TreeNode) +
    number_streets_recursive(node.right as TreeNode)
  );
}

function tree_solve(tree: TreeNode) {
  const candy = tree_candy_recursive(tree);
  const tree_height = tree_height_recursive(tree);
  const number_of_streets = number_streets_recursive(tree) - tree_height;

  console.log(`${number_of_streets} ${candy}\n`);
}

function read_input(): void {
  console.log("Reading Input");
  get_input("Enter Tree Input: ", 100);
}

read_input();
