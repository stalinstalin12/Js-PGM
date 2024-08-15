// let datas=[
//     {
//         id:1,name:"ajul",age:21
//     },
//     {
//         id:2,name:"sourav",age:20
//     }
// ];
// console.log(datas);

// function findUser(id){
//     let user=datas.find(data=>data.id===id);
//     return user;
// }
// let user = findUser(1);
// console.log(user);
// function findUser1(id){
//     let user=datas.find(data=>data.id===id);
//     setTimeout(()=>{
//         return user;
//     },1000);
// }


// let user1=findUser1(2);
// console.log(user1);

// function findUser2(id){
//     return new Promise((resolve,reject)=>{
//         let user=datas.find(data=>data.id===id);
//         setTimeout(()=>{
//             if(user){
//                 resolve(user);
//             }
//             else{
//                 reject("user not found")
//             }
//         },1000);
//     })
// }
// findUser2(1).then((user)=>{
//     console.log(user);
// })
// .catch((message)=>{
//     console.log(message);
// });
// console.log("............................");


// async function result(){
//     try{
//         let user2= await findUser2(1);
//         console.log(user2);
//     }

// }

{
let str1="this is class";
const reg=/z/;
const res=reg.test(str1);
console.log("res1",res);
const reg1=/A/i;
const res1=reg1.test(str1);
console.log("res2",res1);
const reg2=/[c]a/;
const res2=reg2.test(str1);
console.log("res3",res2);
const reg3=/is/;
const res3=reg3.test(str1);
console.log("res4",res3);
const reg4=/[a-z]s/;
const res4=reg4.test(str1);
console.log("res5",res4);
const reg5=/[0-9]a/i;
const res5=reg5.test(str1);
console.log("res6",res5);

}
console.log("\n\n\n")


{
let str=`this is good guy
good guys study 
fishes can swims`;

const reg=/^good/im;
const res=reg.test(str);
console.log(res);

const reg1=/guys?/im;
const res1=reg1.test(str);
console.log(res1);

const reg2=/swim$/im;
const res2=reg2.test(str);
console.log(res2);

const reg3=/guy(s)?/im;
const res3=reg3.test(str);
console.log(res3);

const reg4=/swim.$/i;
const res4=reg4.test(str);
console.log(res4);
}
console.log("\n\n\n");

{
    let str="hellooo";
    const reg=/[kxz]/;
    const res=reg.test(str);
    console.log(res);

    const reg1=/[^kxz]/;
    const res1=reg1.test(str);
    console.log(res1);

    const reg2=/z+/;
    const res2=reg2.test(str);
    console.log(res2);

    const reg3=/o$/;
    const res3=reg3.test(str);
    console.log(res3);

    const reg4=/l+$/;
    const res4=reg4.test(str);
    console.log(res4);

    const reg5=/z?$/;
    const res5=reg5.test(str);
    console.log(res5);
}

console.log("\n\n\n");

{
    let str="hello";

    const reg=/l{2}o$/;
    const res=reg.test(str);
    console.log(res);

    const reg1=/l{2,4}o$/;
    const res1=reg1.test(str);
    console.log(res1);

    const reg2=/HeL{2,4}o$/i;
    const res2=reg2.test(str);
    console.log(res2);

    const reg3=/l{2,}o$/;
    const res3=reg3.test(str);
    console.log(res3);

    const reg4=/\d/i;
    const res4=reg4.test(str);
    console.log(res4);

    const reg5=/\D/i;
    const res5=reg5.test(str);
    console.log(res5);

    const reg6=/./;
    const res6=reg6.test(str);
    console.log(res6);

    const reg7=/\./;
    const res7=reg7.test(str);
    console.log(res7);

}

console.log("\n\n\n\n\n");
function checkDate()
{
let date=document.getElementById("date").value;
const reg=/^([012]\d|3[01])-([0]\d|1[012])-\d{4}$/i;
const res=reg.test(date);
console.log(res);
if(res){
    document.getElementById("result").style.color="green";
    document.getElementById("result").innerHTML=date;
    console.log("valid");
}
else{
    document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML="enter valid date";
    console.log("invalid");
}
}