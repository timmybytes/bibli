/*
Quadrant 1:1
Hemidiagon 1:1.118
Trion 1:1.154
Quadriagon 1:1.207
Biauron 1:1.236
Penton 1:1.272
Diagon 1:1.414
Bipenton 1:1.458
Hemiolion 1:1.5
Auron (Golden Ratio) 1:1.618
Hecton (or Sixton) 1:1.732
Doppelquadrant (Halves) 1:2
*/

const ratio = {
  1: 1,
  2: 1.118,
  3: 1.154,
  4: 1.207,
  5: 1.236,
  6: 1.272,
  7: 1.414,
  8: 1.458,
  9: 1.5,
  10: 1.618,
  11: 1.732,
  12: 2,
};

var array = [1, 1, 1, 1, 1, 1, 1, 1];

const ratioGet = (arr, r) => {
  r = ratio[r];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = r * count;
    count = arr[i];
  }
  console.log(arr);
};

ratioGet(array, 2);
