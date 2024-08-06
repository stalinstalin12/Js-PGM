let xhr=new XMLHttpRequest();
console.log(xhr);

xhr.open('get','https://jsonplaceholder.typicode.com/users');
document.getElementById('btn').addEventListener('click',function(){
    xhr.send();
});

xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        console.log("status",xhr.status);
        if (xhr.status===200){
            let response=xhr.response; 
            console.log("response",response);
            console.log("type of response",typeof(response));

            let datas=JSON.parse(response);
            console.log("datas",datas);

            let datacontainer=document.getElementById('datacontainer');
            console.log(datacontainer);

            let rows='';

            for(let i=0;i<datas.length;i++){
              rows=rows + `
              <tr>
              <td>${datas[i].name} </td>
              <td>${datas[i].username} </td>
              <td>${datas[i].email} </td>
              <td>${datas[i].website} </td>
              </tr>`
         


            }
            datacontainer.innerHTML=rows;
            console.log(rows);
            

            
        }
    }
}