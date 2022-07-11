/** 
buatlah sebuah program untuk menampilkan banyak angka yang keluar. output yang di inginkan : total data paling banyak keluar adalah #angka dengan jumlah #10
*/


var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

function solveProblemOne(arr) {
  const unique = new Set([...arr]);

  let angka = 0;
  let jumlah = 0;

  for (const data of unique) {
    const total = arr.filter((x) => x === data);

    if (jumlah < total.length) {
      angka = data;
      jumlah = total.length;
    }
  }

  return `total data paling banyak keluar adalah ${angka} dengan jumlah ${jumlah}`;
}

solveProblemOne(data1);
solveProblemOne(data2);
solveProblemOne(data3);