// let i = 1;
// let n = prompt("Number: ");
// while (n % i == 0) {
//   i++;
//   console.log(i);
// }
// console.log(i);

// Formatted Date
var date = [10, 50, 55, 5, 85, 800, 350, 650, 74, 57, 99, 100];
datelenght = date.length;
for (i = 0; i < datelenght; i++) {
  for (j = i; j < datelenght; j++) {
    if (date[i] < date[j]) {
      let sum = date[i];
      date[i] = date[j];
      date[j] = sum;
    }
  }
}
  console.log(date[0]);
  console.log(date[1]);
  console.log(date[2]);
  console.log(date[3]);
  console.log(date[4]);