// Question 1

function calEven (num) {
    if (num % 2 === 0) {
        return `${num} is an even number`;
    } else {
        return `${num} is not an even number`;
    };
}
console.log(calEven (30));



//Question 2

function numTwo (n1, n2) {
    for (let n = n1; n <= n2; n++)
     {
        console.log(n);
    }
   
}
numTwo (3, 25);











//Question 3

function cal (start, end) {
let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
return sum;
}
let result = cal(10, 27);
console.log(result);