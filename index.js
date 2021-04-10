console.log("----WELCOME RAHUL----");

// var arr = [{ name: "Rahul", rollno: "22" },
// { name: "Bhardwaj", rollno: "33" }
// ];

// const aa = (arr) => {
//     setTimeout(() => {
//        // arr.push()
//        console.info("aa fun calling"+arr); 
//        var ss =  bb();
//        console.info("printing ss "+ss);
//     }, 5000);
    
//     bb();
  
// }

// let bb = () => {
    
//     setTimeout(() => {
//        // arr.push()
//        console.info("bb fun calling");
//        return "rahul" 
//     }, 2000);
   
// }
//aa(arr);
//--------------------------------------------

// let b = 100;
// function test (a) {
//    // console.log(a);
    
//    function test2 (a) {
//         console.log(a);
//         console.log(b);
//     }
//      test2("ggg")
// }

// test();

//---------------------------------------------
// var a =10;
// var a= 100;

// console.log(a);

//-----------------------------------------------

// function a (){
// var test = 1;

//     for (let i =1; i<=5; i++){

//     setTimeout(function(){

//         console.log(i);

//     },i* 2000);

// }
//      test = 10;
      
//     console.log("Hello");
// }

// a();

//------Rest--------------------------

// let sss =(...test)=>{

//     let val1 = test.filter((a,i)=> test.indexOf(a)==i)
//     console.log(val1);
//     }
//      sss(1,2,3,4,5,6,6,7,7)

//---------spread-----

// const   arr = [1,2,3]
// let sss =(val,a,b,c)=>{
//     //let val1 = test.filter((a,i)=> test.indexOf(a)==i)
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(val);
//     }
//     console.log(...arr);  // using spread it convert into , seprated string fromm array
//      sss("val",...arr);
// //--------------
//      const   arr1 = [1,2,3];
//      const   arr2 = [4,5,6];

//      //const   arr3 = arr1.concat(arr2);
//      const   arr3 = [...arr1,...arr2]
//      let arr4 = [...arr1];
//      arr4.push(33);
//      console.log(arr3);
//      console.log(arr4);
//      console.log(arr1);

     //--------closure-------------------



// const outer=(b)=>{

//     let a = "10"

//     const inner=()=>{
// console.log(a+b);
//     }

// return inner;

// }

// outer("fff")();

// ----- updated closure---------
// const outest=()=>{

// const outer=(b)=>{

//     let a = "10"

//     const inner=()=>{
// console.log(a+b);
//     }

// return inner;

// }
// return outer;
// }
// let a = "100"
// var close = (outest())("hello");
// close();

//--------data hiding in closure-------


// function counter(){
//     var count = 0;
//     return function incCount(){
//         count++;
//         console.log(count)
//     }
// }

// var incnt = counter();
// incnt();incnt();

// now create a constructor function to call multiple function in counter()

function Counter(){
    var count = 0;
     this.incCount = function (){
        count++;
        console.log(count)
    }

    this.decCount = function (){
        count--;
        console.log(count)
    }
}

var newCntr = new Counter();
newCntr.incCount()
console.log(newCntr);

//--------------add-------

var numbers = [175, 50, 25];

const sumNum =()=> numbers.reduce((total,num)=>total+num);

//var sumCount = sumNum();
console.log(sumNum());

for(var i of numbers){
    console.log(i); 
}