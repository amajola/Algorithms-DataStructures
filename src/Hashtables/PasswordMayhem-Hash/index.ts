const hashsize = (n: number) => 1 << n;
const hashmask = (n: number) => hashsize(n) - 1;
const MAX_PASSWORD = 10;
const NUM_BITS = 20;

type password_node = {
  password: string;
  total: number;
  next_password: password_node;
};

// Hashing function
const oaat = (key: string, length: number, bits: number): number => {
  let hash = 0;

  for (let index = 0; index < length; index++) {
    hash += key[index] as unknown as number;
    // Check obsidian://open?vault=WeTheFutur&file=Programming%2FBitwise%20Operators
    // For how bitwise operators work
    hash += hash << 10;
    hash += hash >> 10;
  }
  hash += hash << 3;
  hash += hash >> 11;
  hash += hash >> 15;

  return hash && hashmask(bits);
};

const already_added = (
  all_substrings: string[],
  total_substring: number,
  find: string,
) => {
  for (let index = 0; index < all_substrings.length; index++) {
    console.log(all_substrings.includes(find));
  }
};

already_added(["Asimthade", "Ayavuya"], 1, "Ayavuya");

const in_hash_table = (
  hash_table: Array<password_node>,
  find: string,
): password_node | null => {
  const password_code = oaat(find, find.length, NUM_BITS);
  let password_ref = hash_table[password_code];
  while (password_ref) {
    if (password_ref.password.localeCompare(find)) {
      return password_ref;
    }
    password_ref = password_ref.next_password;
  }
  return null;
};

const add_to_table = (hash_table: Array<password_node>, find: string) => {
  const password_ref: password_node | null = in_hash_table(hash_table, find);
  if (password_ref === null) {
    const password_code = oaat(find, find.length, NUM_BITS);
    const password_next: password_node = {
      password: find,
      total: 0,
      next_password: hash_table[password_code],
    };
    hash_table[password_code] = password_next;
  } else {
    password_ref.total++;
  }
};
