let n = prompt("Enter the Number");

let arr1 = [];

for (let i = 0; i <= n ; i++) {

    arr1[i- 1]= i;

}

console.log(arr1);

let fact = arr1.reduce(function arr2(res,curr) {

return res * curr ;

} ,1)

console.log(fact);

