let newbtn = document.createElement("button");

newbtn.innerText = "Click Me";
newbtn.style.backgroundColor = "Red"
newbtn.style.color = "White";

console.log(newbtn);

document.querySelector("body").append(newbtn);


let para= document.querySelector("p");
console.dir(para);

para.getAttribute("new1");
para.setAttribute("new1","newclass");


//para.classList.add("newclass");  // It is use to add new class in the html
//para.classList.remove("newclass");  // It is use to remove old classes in the html


