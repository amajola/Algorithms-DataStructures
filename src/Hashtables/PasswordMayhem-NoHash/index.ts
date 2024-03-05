import { read_file } from "../../Utils/input.ts";

const MAX_PASSWORD = 10;

async function main() {
  const input = await read_file(MAX_PASSWORD + 1);
  const input_lines = input?.split("\n");
  const users: Array<string> = [];

  if (input_lines) {
    const number_ops = input_lines.slice(0, 1).pop() as unknown as number;
    const process = input_lines.slice(1, input_lines.length);

    for (let index = 0; index < number_ops; index++) {
      const operation = process[index].split(" ");
      if (operation[0] === "1") {
        users.push(operation[1]);
      } else {
        let total = 0;
        for (let index = 0; index < users.length; index++) {
          const element = users[index];
          if (element.includes(operation[1])) {
            total += 1;
          }
        }
        console.log(total);
      }
    }
  }
}

main();
