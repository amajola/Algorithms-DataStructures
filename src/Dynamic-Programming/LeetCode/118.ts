function generate(numRows: number): number[][] {
  const array: Array<Array<number>> = [];
  for (let index = 0; index < numRows; index++) {
    if (index === 0) array.push([1]);
    else {
      const array_item = new Array(index);
      for (let _index = 0; _index < numRows; _index++) {
        if (_index === 0) array_item[_index] = 1;
        else if (_index > 0 && _index < array_item.length) {
          array_item[_index] = array[index - 1][_index - 1] + array[index - 1][_index];
        }
      }
      array_item[array_item.length] = 1;
      array.push(array_item);
    }
  }
  return array;
}
