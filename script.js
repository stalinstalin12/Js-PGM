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


