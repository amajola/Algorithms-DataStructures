function majorityElement(nums: number[]): number {
  let return_value = 1;
  const obj = nums.sort().reduce((re, el) => {
    if (!Object.keys(re).includes(el.toString())) {
      re[el.toString()] = 1;
    } else {
      re[el.toString()] += 1;
      if (re[el.toString()] > nums.length / 2) {
        return_value = el
      }
    }
    return re;
  }, {});

  return return_value
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
