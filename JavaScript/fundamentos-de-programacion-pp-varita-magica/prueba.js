var moveZeros = function (arr) {
  let arr2 = arr.filter((i) => i == 0);
  let arrf = arr.filter((i) => i != 0);
  let final = arrf.concat(arr2);
  console.log(final);
};
moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);
