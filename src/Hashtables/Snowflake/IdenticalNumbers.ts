const identical_numbers_left = (
  snow_one: Array<number>,
  snow_two: Array<number>,
  start: number
) => {
  for (let offset = 0; offset < 6; offset++) {
    if (snow_two[offset] != snow_one[(offset + start) % 6]) {
      return 0;
    }
  }
  return 1;
};

const identical_numbers_right = (
  snow_one: Array<number>,
  snow_two: Array<number>,
  start: number
) => {
  for (let offset = 0; offset < 6; offset++) {
    let snow_two_index = start - offset;
    if (snow_two_index <= -1) {
      snow_two_index += 6;
    }
    if (snow_one[offset] !== snow_two[snow_two_index]) {
      return 0;
    }
  }
  return 1;
};

const are_identical = (snow_one: Array<number>, snow_two: Array<number>) => {
  for (let index = 0; index < 6; index++) {
    if (identical_numbers_left(snow_one, snow_two, index) === 1) return 1;
    if (identical_numbers_right(snow_one, snow_two, index) === 1) return 1;
  }
  return 0;
};

console.log(are_identical([1, 2, 3, 4, 5, 6], [4, 3, 2, 1, 6, 5]));
