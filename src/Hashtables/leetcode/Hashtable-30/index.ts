interface WordInterface {
  word: string;
  hash: number;
  next: WordInterface | null;
}

// Hash function
function stringHash(s: string, modulus: number) {
  let hashValue = 0;
  const prime = 31;

  for (let i = 0; i < s.length; i++) {
    hashValue = (hashValue * prime + s.charCodeAt(i)) % modulus;
  }

  return hashValue;
}

function addWords(
  inputArray: string[],
): Array<WordInterface> {
  const hash_table: Array<WordInterface> = [];

  // Helper function to generate permutations recursively
  function generate(
    currentPermutation: string[],
    remainingStrings: string[],
  ): void {
    if (remainingStrings.length === 0) {
      // If no more strings are left, add the current permutation to the list
      const joinedWords = currentPermutation.join("");
      hash_table[stringHash(joinedWords, 1000007)] = {
        word: joinedWords,
        hash: stringHash(joinedWords, 1000007),
        next: null,
      };
      return;
    }

    for (let i = 0; i < remainingStrings.length; i++) {
      // Choose a string from the remaining ones
      currentPermutation.push(remainingStrings[i]);
      const nextRemaining = remainingStrings.slice(0, i).concat(
        remainingStrings.slice(i + 1),
      );

      // Recursively generate permutations with the chosen string
      generate(currentPermutation, nextRemaining);

      // Backtrack to explore other possibilities
      currentPermutation.pop();
    }
  }

  generate([], inputArray);
  return hash_table;
}

function findSubstring(s: string, words: string[]): number[] {
  const concat = addWords(words);
  const lengthOfWord = words[0].length;
  const totalWords = words.join("").length;

  let index = 0;
  const returnArray: Array<number> = [];
  while (index <= totalWords + lengthOfWord) {
    const wordExists: WordInterface | undefined =
      concat[stringHash(s.slice(0, totalWords), 1000007)];
    console.log(s.slice(0, totalWords));
    if (wordExists) {
      returnArray.push(index);
    }
    s = s.slice(1);
    index = index + 1;
  }
  return returnArray;
}

// s = "wordgoodgoodgoodbestword", words = ["bar", "foo", "the"];
const answer = findSubstring(
  "lingmindraboofooowingdingbarrwingmonkeypoundcake",
  ["fooo", "barr", "wing", "ding", "wing"],
);
console.log(answer);
