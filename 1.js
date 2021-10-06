/* 
Pada sebuah form, terdapat 3 buah field yaitu: username, email dan password.
Buatlah function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
username, hanya boleh huruf kecil dan terdiri dari 6 karakter, selain itu invalid
email, hanya valid ketika mengandung char '@' dan hanya boleh huruf kecil
password, minimal 8 karakter, mengandung 1 huruf kapital dan angka.
Contoh:
jika function dijalankan
cekUsername(‘Kamusiapa’); >> dicetak dilayar invalid
cekEmail(‘kamusiapa@gmail.com’); >> dicetak dilayar valid
cekPassword (‘Kamusiapa2169’) >> dicetak layar valid
*/

// username, hanya boleh huruf kecil dan terdiri dari 6 karakter, selain itu invalid

const cekUsername = (username) => {
  let Regex = /^[a-z]{6}$/;
  if (Regex.test(username) == true) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
};

// email, hanya valid ketika mengandung char '@' dan hanya boleh huruf kecil

const cekEmail = (email) => {
  let Regex = /^([a-z][a-z\-\.\_]*)\@([a-z][a-z\-\_]*)(\.[a-z][a-z\-\_]*)+$/;
  if (Regex.test(email) == true) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
};

// password, minimal 8 karakter, mengandung 1 huruf kapital dan angka.

const cekPassword = (password) => {
  let Regex = /^([A-Z]{1})([a-z]{6,}[0-9]{1}[a-z0-9\-\.\_]*)$/;
  if (password.length > 8 && Regex.test(password) == true) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
};

cekUsername("Kamusiapa"); // invalid
cekEmail("kamusiapa@gmail.com"); // valid
cekPassword("Kamusiapa2169"); // valid
