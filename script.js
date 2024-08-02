//FUNCTIONS

//Named Function
function fun1(){
    console.log("Named Function");
}
fun1();

//Anonymous Function
const fun2=function(){
    console.log("Anonymous Function");
}
fun2();
 
//Arrow Function
const fun3= ()=>{
    console.log("Arrow Function");
}
fun3();

//parameter function
function fun4(a,b){
    console.log(a+b);
}
fun4(10,20);

//function with return
function fun5(){
    console.log("Return Function");
    return 10;
}
const a=fun5();
console.log(a);

//callback function
function fun6(fun,num){
    fun();
    console.log(num);
}
fun6(function(){ console.log("callback Function")},50);

//call by value
 {  
     console.log("\n\n\n\n");
function update(a){
    a=100;
    console.log("inside", a);
}
let a=50;
console.log("outside", a);

update(a);
console.log("Call By Value",a);
console.log("\n\n");
 }
 

 //Call By Reference
 function upd(arr){
    arr[1]=200;
    console.log("inside",arr);
 }
let arr=[50,100,200,300,400];
console.log("outside", arr);
upd(arr);
console.log("call by reference",arr);
 


console.log("\n\n\n");
//closure
{
function outer(){
    let outervar="outer";

    function inner(){
        function inner1() {
            function inner2(){
                console.log(outervar);
            }
            return inner2;     
        }
    return inner1;
    }
return inner;
}
let res=outer();
console.log("result :",res);
let res1=res();
let res2=res1();
res2();
}


//break & continue
console.log("\n\n\n");{
for(let i=0;i<10;i++){
    if (i===4){
       continue
    }
    console.log(i);
}
}

//recursive fn
console.log("\n\n\n");{
    function fn(a){
        if(a<0){
            return;
        }

        console.log(a);
        fn(--a);
        
    }
    
    fn(10);
}



//Timer functions
// console.log("\n\n\n");
// {
// setTimeout(function(){
//     console.log("SET TIMEOUT");
// },6000);

// function zero(value){
//    return value < 10 ? "0"+value :value;
// }
// function show(){
//     let dt=new Date();
//     console.log(dt);

//     let hours=dt.getHours();
//     console.log(hours);

//     let ampm=hours < 12 ? "am":"pm";
//     console.log(ampm);

//     let time =document.getElementById('time');
//     console.log(time);
    
//     time.innerHTML=zero(hours)+":"+zero(dt.getMinutes())+":"+zero(dt.getSeconds())

//     setTimeout(show,1000);
// }
// show();

// }



//event handling
console.log("\n\n\n");
{
    let btn=document.getElementById('btn');
    console.log(btn);

    btn.addEventListener('click',function(){
        console.log("BUTTON CLICKED");
    });

    btn.addEventListener('mouseover',function(){
        console.log("MOUSE OVER ");
    });

    btn.addEventListener('mouseout',function(){
        console.log("MOUSE OUT ");
    });

    btn.addEventListener('mousedown',function(){
        console.log("MOUSE DOWN ");
    });

    btn.addEventListener('mouseup',function(){
        console.log(" MOUSE UP");
    });

    btn.addEventListener('mousemove',function(){
        console.log("MOUSE MOVE");
    });

    let txt=document.getElementById('txt');
    console.log(txt);

    txt.addEventListener('keydown',function(){
        console.log("KEY PRESSED");
    });
    
    txt.addEventListener('keyup',function(){
        console.log("KEY RELEASED");
    });

    txt.addEventListener('keypress',function(){
        console.log("KEY press");
    });
}

//spread operator
{
console.log("\n\n\n");
 let arr=[1,2,3];
 console.log("arr :",arr);
 let arr1=[...arr];
 console.log("arr1 :",arr1);
 console.log("\n\n\n");
let obj={a1:1,a2:2};
console.log(obj);
let obj2={...obj};
console.log(obj2);
}

//destructing
console.log("\n\n\n");
let[a1,b1,c1,d1,e1]=arr;
console.log(a1);
console.log(b1);
console.log(c1);

//nested destructing
console.log("\n\n\n");
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(matrix);
let [row1,row2,[g,h,i]]=matrix;
console.log(row1);
console.log(row2);
console.log(row3);

let [a2,b2,c2]=row1;
console.log(1);
console.log(b2);
console.log(c2);

console.log("\n\n\n\n\n");
let obj={
    name:"Zodge",
    age:26,
    greeting:function(){
        console.log("hello",this.name,"your age is", this.age);
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);
obj.greeting();

//constructor
console.log("\n\n\n\n\n");
function person(name,age,mark){
    this.name=name;
    this.age=age;
    this.mark=mark;
    this.greeting=function(){
        console.log(`hello ${this.name} your age is ${this.age}`);
    }
}
let person1=new person("Shahrukh",58,89);
console.log(person1);
person1.greeting();
let person2=new person("Vikram",59,78);
console.log(person2);
person2.greeting();

person2.city="Mumbai";
console.log(person2);
person.prototype.getMark=function(){
    console.log("name :",this.name,"\nmark :",this.mark);
}
person2.getMark();
person1.getMark();

