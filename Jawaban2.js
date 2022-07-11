//**    - Jika inputan mengandung angka maka harus mengeluarkan output : Sistem kami menolak untuk inputan berisi angka 167283
// Jika inputan tidak mengandung angka maka harus mengeluarkan output : Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang! */

var input1 = 'hallo jesika24 selamat datang!';
var input2 = 'hallo anggun selamat datang!';
var input3 = 'hallo ** selamat datang!';
var input4 = 'hallo Mariage889120! selamat datang!';

function validateText(string) {
  const splittedString = string.split('');
  const hasNumbers = splittedString.filter((str) => parseInt(str));

  const joinedNumber = hasNumbers.join('');

  if (hasNumbers.length > 0)
    return `Sistem kami menolak untuk inputan berisi angka ${joinedNumber}`;

  return `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${string}`;
}

validateText(input1);
validateText(input2);
validateText(input3);
validateText(input4);
