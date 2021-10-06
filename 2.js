const sort_array = (data) => {
  for (let i = 0; i < data.length; i++) {
    data[i].sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  console.log(data.sort((a, b) => a.length - b.length));
};

var data = [
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"],
];

var datalain = [
  ["g", "h", "i", "j"],
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"],
];

sort_array(data);
sort_array(datalain);

/* [ [ 'e', 'f', 'g' ], [ 'a', 'b', 'c', 'd', 'e' ] ]
[
  [ 'e', 'f', 'g' ],
  [ 'g', 'h', 'i', 'j' ],
  [ 'a', 'b', 'c', 'd', 'e' ]
]
*/
