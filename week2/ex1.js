/*Exercise 1
Write a JavaScript function to print an integer with commas as thousands separators.
Input Output
1000 "1,000"
20566 "20,566"
100000 "100,000"
*/

function thousandsSep(number) {
   return (String(number).slice(0, -3) + "," + String(number).slice(-3));
}



console.log(thousandsSep(20566));