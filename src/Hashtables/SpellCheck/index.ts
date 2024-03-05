import { get_input } from "../../Utils/input.ts";

function prefix_length(needle: string, haystack: string): number {
  let index = 0;

  while (needle[index] === haystack[index]) {
    index++;
  }
  return index - 1;
}

function suffix_length(
  needle: string,
  haystack: string,
  length: number,
): number {
  let index = needle.length;
  console.log(needle[index - 1], haystack[index]);
  while (index >= 2 && needle[index - 1] === haystack[index]) {
    index--;
  }
  return length - index;
}

function main(): void {
  const haystack = Deno.args[0];
  const needle = Deno.args[1];

  suffix_length(needle, haystack, needle.length);
}

main();
// const input = await get_input("Enter two strings needed", 1024).then(
//   (element) => element?.split(" "),
// );

// console.log(input);
