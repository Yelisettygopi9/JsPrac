

// function a() {
//     console.log("Hello World");
// }
// a();






// function fun(x, y) {
//     console.log(x + y);
// }
// fun(4, 5);





// let a = prompt("a value")
// let b = prompt("b value")
// function sum(a, b) {
//     console.log(a + b)
// }
// sum(a, b)






// let a = Number(prompt("a value"))
// let b = Number(prompt("b value"))
// function sum(a, b) {
//     console.log(a + b)
// }
// sum(a, b)






// function add(x, y, z) {
//     console.log(x + y + z);
//     console.log(x, y, z);
// }
// add(4, 5, 6)//15
//add(4, 5)//NaN






// function add(x) {
//     console.log("hello");
// }
// console.log(add)



// function add(x) {
//     console.log("hello");
// }
// let a = add
// a();
// let a = add() //hello
// console.log(a);//undefined
// let a = add
// let b = a
// b()
// let a=add()
// let b=a
// console.log(b);





// let a = function () {
//     console.log("hello");
// }
// a();





// a();
// function a() {
//     console.log("hello java script")
// }





// let person = {
//     name: "Gopi",
//     age: 22,
//     salary:
//         function () {
//             console.log("salary is 10k ")
//         }

// }
// person.salary()
// console.log(console);











// ----------------------------------------------------------------

// console.log("hello");
// let a = 20;
// function x() {
//     let b = 30;
//     console.log(a);
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// console.log(a);
// x();


// ----------------------------------------------------------------



// console.log("hello");
// let a = 20
// a = 30
// function x() {
//     a = 40
//     let b = 50
//     console.log(a);
//     function y() {
//         let c = 4;
//         console.log(b);
//         console.log(a);
//     }
//     y();
//     console.log(a);
// }
// console.log(a);
// x();
// console.log(a);
// -------------------------------------------------------------------


// --------------closure memory------------
// console.log("hello");
// function x() {
//     let a = 10
//     function y() {
//         return a
//     }
//     return y
// }
// let z = x()
// let p = z()
// console.log(p);


// let a = 30
// function x() {
//     let b = 40
//     console.log(a);
//     function y() {
//         return b
//     }
//     return y
// }
// let z = x()//10
// console.log(z());
// -------------------------------------------------------


//---------------------Arrow functions------------------------------------------

// let a = (x, y) => x + y
// let b = (x, y) => {
//     return x + y
// }
// let value1 = a(4, 45)
// let value2 = b(8, 8)
// console.log(value1, value2)


// -------------Spread and rest--------------------


// ----Spread-------
// let arr = [10, 20, 30, 40]
// let arr1 = [arr, 50, 60]
// console.log(arr1);

// let arr = [10, 20, 30, 40]
// let arr1 = [...arr, 50, 60]
// console.log(arr1);

// ------Rest----
// function a(p, ...z) {
//     console.log(z);
// }
// a(2, 2, 5, 5, 8, 5)



// let obj1 = {
//     id: 474,
//     company: "google",
//     salary: "3lpa"
// }
// let obj2 = {
//     name: "gopi",
//     ...obj1
// }
// console.log(obj2);

// let [a, b, ...c] = [10, 20, 30, 40]
// console.log(a)
// console.log(b)
// console.log(c)
// --------------------------------------------------------------

// let laptop = {
//     name: "Hp",
//     Ram: "16gb",
//     processor: "i7",
//     greet: function () {
//         console.log(this.processor);
//     }
// }
// laptop.greet()
// laptop.storage = "512GB"
// --------------------------------------------------------


// function laptop(name, ram, processor) {
//     this.name = name
//     this.ram = ram
//     this.processor = processor
// }
// let laptop1 = new laptop("lenovo", "4gb", "i5")
// let laptop2 = new laptop("Dell", "8gb", "i7")
// console.log(laptop1);
// console.log(laptop2);

// --------------------------------------------------------------

// let laptop = {
//     name: "HP",
//     ram: "8gb",
//     processor: "i5"
// }
// let a = Object.keys(laptop)
// console.log(a);
// let b = Object.values(laptop)
// console.log(b);
// let c = Object.entries(laptop)
// console.log(c);

// ---------------------------------------------------------------------






























// ---------------------------------------------------------------
// DOM
// let a = document.querySelector("div")
// console.log(a);


// let a = document.querySelector(".y")
// console.log(a);

// let a = document.querySelectorAll(".y")
// console.log(a);
// a.forEach((x) => {
//     x.style.background = "red"
// })

// fun.js
// let a = document.QuerySelector("div")
// let b = document.QuerySelector("#x")
// let c = document.QuerySelector(".y")
// console.log(a) //<div>Div1</div>
// console.log(b) //<div id="x">Div2</div>
// console.log(c) //<div class="y">Div3</div>
// =================================================================



// let heading1 = document.createElement("h1")
// heading1.innerText = "hello world"
// document.body.append(heading1)
// let para = document.createElement("p")
// para.innerText = "abcdefghijklmnopqrstuvwxyz"
// document.body.append(para)



// let ol = document.createElement("ol")
// let li1 = document.createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")
// li1.innerText = "Html"
// li2.innerText = "css"
// li3.innerText = "js"

// ol.append(li1)
// ol.append(li2)
// ol.append(li3)
// document.body.append(ol)





















// let ul = document.createElement("ul")
// let li1 = document.createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")
// li1.innerText = "Html"
// li2.innerText = "css"
// li3.innerText = "js"

// ul.append(li1)
// ul.append(li2)
// ul.append(li3)
// document.body.append(ul)

// ====================================================================








// let table = document.createElement("table")
// let tr1 = document.createElement("tr")
// let tr2 = document.createElement("tr")
// let tr3 = document.createElement("tr")
// let tr4 = document.createElement("tr")
// //row1
// let td1 = document.createElement("td")
// td1.innerText = "Time/Day"
// let td2 = document.createElement("td")
// td2.innerText = "10.00"
// let td3 = document.createElement("td")
// td3.innerText = "12.00"

// tr1.appendChild(td1)
// tr1.appendChild(td2)
// tr1.appendChild(td3)
// table.appendChild(tr1)
// //row2
// let td4 = document.createElement("td")
// td4.innerText = "Monday"
// let td5 = document.createElement("td")
// td5.innerText = "HTML"
// let td6 = document.createElement("td")
// td6.innerText = "CSS"

// tr2.appendChild(td4)
// tr2.appendChild(td5)
// tr2.appendChild(td6)
// table.appendChild(tr2)
// //row3
// let td7 = document.createElement("td")
// td7.innerText = "Tuesday"
// let td8 = document.createElement("td")
// td8.innerText = "REACT"
// let td9 = document.createElement("td")
// td9.innerText = "JS"

// tr3.appendChild(td7)
// tr3.appendChild(td8)
// tr3.appendChild(td9)
// table.appendChild(tr3)
// //row4
// let td10 = document.createElement("td")
// td10.innerText = "wednesday"
// let td11 = document.createElement("td")
// td11.innerText = "MONGODB"
// let td12 = document.createElement("td")
// td12.innerText = "Node JS"

// tr4.appendChild(td10)
// tr4.appendChild(td11)
// tr4.appendChild(td12)
// table.appendChild(tr4)

// table.width = "500px"
// table.border = "2px"
// table.cellSpacing = "0"
// table.cellPadding = "10px"
// document.body.append(table)

//create a simple form by using Dom


// function x() {
//     console.log("h1 tag is clicked");
// }
// function y() {
//     console.log("submitted ");
// }




let a = document.querySelector("h1")
function chgcolor() {

    // console.log(a);
    a.style.background = "red"
}
// function chgcolor1() {
//     a.style.backgroundColor = "blue"
// }














































































































































