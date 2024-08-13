let datas=[
    {
        id:1,name:"ajul",age:21
    },
    {
        id:2,name:"sourav",age:20
    }
];
console.log(datas);

function findUser(id){
    let user=datas.find(data=>data.id===id);
    return user;
}
let user = findUser(1);
console.log(user);
function findUser1(id){
    let user=datas.find(data=>data.id===id);
    setTimeout(()=>{
        return user;
    },1000);
}


let user1=findUser1(2);
console.log(user1);

function findUser2(id){
    return new Promise((resolve,reject)=>{
        let user=datas.find(data=>data.id===id);
        setTimeout(()=>{
            if(user){
                resolve(user);
            }
            else{
                reject("user not found")
            }
        },1000);
    })
}
findUser2(1).then((user)=>{
    console.log(user);
})
.catch((message)=>{
    console.log(message);
});
console.log("............................");


async function result(){
    try{
        let user2= await findUser2(1);
        console.log(user2)
    }
}
