import { TreeNode } from "../BinaryTrees/index.ts";

export const get_input = async (
  prompt: string,
  buffer_length: number,
): Promise<string | null> => {
  const buffer: Uint8Array = new Uint8Array(buffer_length);
  await Deno.stdout.write(new TextEncoder().encode(prompt + ": "));

  const readline: number | null = await Deno.stdin.read(buffer);
  return readline
    ? new TextDecoder().decode(buffer.subarray(0, readline)).trim()
    : null;
};

export const read_file = async (
  buffer_length: number,
): Promise<string | null> => {
  const file_name: string | null = await get_input(
    "Enter File name: ",
    buffer_length,
  );
  const decoder = new TextDecoder("utf-8");
  if (file_name === null) {
    return null;
  }
  const data = await Deno.readFile(file_name);
  return decoder.decode(data);
};

const value = await get_input("Enter Tree Input", 100);

function read_input_count(line: string, count: number): TreeNode {
  let tree: TreeNode = {} as TreeNode;

  if (line[count] === "(") {
    count += 1;
    tree.left = read_input_count(line, count);
    count += 1;
    tree.right = read_input_count(line, count);
    count += 1;
    return tree;
  } else {
    tree.left = null;
    tree.right = null;
    tree.candy = Number(line[count]);
    count += 1;

    if (line[count] !== ")" && line[count] !== " ") {
      console.log(line[count])
      tree.candy = Number(tree.candy.toString() + line[count]);
      count += 1;
    }
    return tree;
  }
}

function read_input(line: string) {
  let tree: TreeNode = {} as TreeNode;

  if (line[0] === "(") {
    const { tree: tree_left, line: line_left } = read_input(line.substring(1));
    tree.left = tree_left;
    const { tree: tree_right, line: line_right } = read_input(
      line_left.substring(1),
    );
    tree.right = tree_right;
    return { tree, line: line };
  } else {
    tree.left = null;
    tree.right = null;
    tree.candy = Number(line[0]);
    line = line.substring(1);

    if (line[0] !== ")" && line[0] !== " ") {
      tree.candy = Number(tree.candy.toString() + line[0]);
      line = line.substring(1);
    }
    return { tree, line: line };
  }
}

const tree = read_input(value);
const tree_count = read_input_count(value, 0);
console.log(tree);
console.log(tree_count)
