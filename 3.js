const cetak_gambar = (n) => {
  if (n % 2 === 1) {
    console.log(`Angka harus bilangan genap`);
  } else {
    for (let i = 1; i <= n; i++) {
      let str = "";
      for (let j = 1; j <= n; j++) {
        if (i == 1 || i == n) {
          str += "+ ";
        } else if (j % 3 == 0) {
          str += "+ ";
        } else if (j % 3 != 0) {
          str += "= ";
        }
      }
      console.log(str);
    }
  }
};

cetak_gambar(8);

/* 
+ + + + + + + + 
= = + = = + = = 
= = + = = + = = 
= = + = = + = = 
= = + = = + = = 
= = + = = + = = 
+ + + + + + + +
*/
