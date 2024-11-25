/*function rishi() {



    console.log("Rishi");
    console.log("Karir");

}


rishi(); 


//Redundency // repeating

function rishi(msg) {

console.log(msg);



}

rishi("Hello world");   



function boi(a,b){

console.log(a+b);

}

boi(10,20);





function myfunc(a,b){

return  a+b;

}

console.log(myfunc(10,20));





// foreach(callback)//  Higher order functions are those functions which take another function as a parameter or return the value of it
let arr1= [1,2,3,,4,5];

arr1.forEach(function printval
    (val){
console.log(val);


    }) 

    // We can pass three types of value in Foreach = Value(Item),Index,Array.

//Method // when we associate function with an object,arrays or other data structure is called a method


//Map //  it is use to create a new array by performing some operations

arr2 = [ 2,4,5,6,7,8]

arr3 = arr2.map(function newval(sqr){



console.log(sqr*sqr);


})



arr1= [2,4,6,7,8,9,10,11,12]

 let new1 = arr1.filter(function newar(val){



    return val % 2===0;




 })

 console.log(new1);

 */


 arr1 = [ 1,2,3,4,5]

 const newarr = arr1.reduce(function arr2(res,curr) {

return res+ curr;

}
)

console.log(newarr);

