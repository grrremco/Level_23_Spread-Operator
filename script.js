/*
const addUp = function(...numbers) {
    return numbers.reduce((prev, current) => {
            return prev + current;
    })
}
*/

function addUp(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

console.log(addUp(2, 4, 6, 8, 10, 12));


/*
const addingUp = function(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  const numbers = [1, 2, 3];
*/  
  

function addingUp(a, b, c) {
    return a + b + c
}
  
const numbers = [2, 4, 6];

console.log(addingUp(...numbers));
