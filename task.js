const people=[
    {name: 'Alice', age: 30, city:'New York'},
    {name: 'Bob', age: 25, city:'Los Angeles'},
    {name: 'Charlie', age: 35, city:'Chicago'},
    {name: 'David', age: 30, city:'New York'},
    {name: 'Eve', age: 28, city:'Los Angeles'}
];
console.log(people);

//foreach
//uppercase
console.log("forEach\n\n\n uppercase");
people.forEach(i => {
    console.log(i.name.toUpperCase());
});
//add 5 years to age
console.log("\n\n add 5 years to age");
people.forEach(i => {
    console.log(i.age+5);
});
//list cities
console.log("\n\n list cities\n\n\n");
people.forEach(i => {
    console.log(i.city);
});

//find
console.log("\n\n\nfind\n\n youngest person");
const min_age=Math.min(...people.map(i => i.age));
const young=people.find(i=>i.age===min_age);
console.log(young);
console.log("\n\n find charlie");
let result=people.find(i=>i.name==='Charlie');
console.log(result);
console.log("\n\n person from chicago");
let result1=people.find(i=>i.city==='Chicago');
console.log(result1);

//filter
console.log("\n\n\nfilter\n\n people above age 30");
let result2=people.filter((i=>{
    return i.age>=30;
}));
console.log(result2);
console.log("\n\n person from newyork");
let result3=people.filter(i=>i.city==='New York');
console.log(result3);
console.log("\n\n people name more than 4 character");
let result4=people.filter(i=>i.name.length>4);
console.log(result4);

//map
console.log("\n\n\nmap\n\n array of ages");
let result5=people.map((i)=>{
    return i.age;
});
console.log(result5);
console.log("\n\n\n array of email");
let result6=people.map((i)=>{
    mail=i.name+i.age+"@gmail.com";
    return mail;
});
console.log(result6);

console.log("\n\n\n array of email");
let result7=people.map((i)=>{
    desc="i am " +i.name+" , my age is"+i.age+" and i am living in "+i.city;
    return desc;
});
console.log(result7);

//reduce
console.log("\n\n\n reduce\n\ncalc total age");
let result8=people.reduce((total,i)=>{
    return total+i.age;
},0);
console.log(result8);
console.log("\n\n\n concatenate all names");
let result9=people.reduce((total,i)=>{
    return total+i.name;
});
console.log(result9);
console.log("\n\n\n no of persons from each city");
const count=people.reduce((tot,i)=>{
    if(!tot[i.city]){
        tot[i.city]=1;}
        else{
          tot[i.city]++;
        }
        return tot;

},{});
console.log(count);

{
    console.log("\n\n\n");
    class animal{
        name;
        eat;
    
        constructor(name,eat){
            this.name=name;
            this.eat=eat;
            
    
        }
        eating(){
            console.log(`${this.name} is eating ${this.eat}`);     
        }
       
    } let cat=new animal("cat","rat");
        console.log(cat);
        cat.eating();
        
        let cow=new animal("cow","grass");
        console.log(cow);
        cow.eating();
    }
    {
        //inheritance
        console.log("\n\n\n");
        class Vehicle{
            name;
            constructor(name){
                this.name=name; 
            }
            riding(){
                console.log(`  ${this.name} is riding `)
            }
        }
        let Vehicle1=new Vehicle("Vehicle");
        console.log(Vehicle1);
        Vehicle1.riding();

        //inheritance
        class Bike extends Vehicle{
            color;
            constructor(name,color){
                super(name);
                this.color=color;
            }
            // method overriding
            riding(){
                console.log(`${this.name} is ${this.color} color`)
            }
        }
        let bike1 =new Bike("Splendor","black");
        console.log(bike1);
        bike1.riding();
    }
    {
        console.log("\n\n\n\n");
        class Car{
            name;
            color;
            constructor(name){
                this.name=name;
            }
            info(){
                console.log(`${this.color} ${this.name}`);
            }
            //Getters and Setters
            set Color(color){
                this.color=color;
            }
            get Color(){
                return this.color;
            }

        }
        let car1= new Car("BMW");
        car1.Color="Red;"// SETTER
        console.log(car1);
        car1.info();
        console.log(car1.Color);//GETTER
    }
    console.log("\n\n\n\n");
{
  class Button{
    button;
    constructor(content){
        this.button=document.createElement('button');
        this.button.innerHTML=content;
        document.body.appendChild(this.button);
    }
    set width(width){
        this.button.style.width=width+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get width(){
        return this.button.style.width;
    }
    get height(){
        return this.button.style.height;
    }
    onClick(fn){
        this.button.onclick=function(){
            console.log(this);
            console.log(this.button);
            this.button.style.width=50+"px";
            this.button.style.height=30+"px"
            fn();
        }.bind(this);
    }
  }  
  let button1=new Button('click');
  console.log(button1);
  button1.width=100;
  button1.height=50
  console.log(button1);

  console.log(button1.width);
  console.log(button1.height);
  button1.onClick(function(){console.log("clicked...");    
  });
  class BlackButton extends Button{
    constructor(content){
        super(content);
        this.button.style.background="black";
        this.button.style.color="white";
    }
    //method overriding
    onClick(fn){
        this.button.onclick=function(){
            console.log(this);
            console.log(this.button);
            this.button.style.padding=10+"px";
            fn();
        }.bind(this);
    }
  }
  let bButton=new BlackButton("Don't click");
  bButton.onClick(function(){
    console.log("Blac button clicked");
  });



}


{
    console.log("\n\n\n");
    class Paragraph{
        Para;
        constructor(content){
            this.para=document.createElement('p');
            this.para.innerHTML=content;
            document.body.appendChild(this.para);
        }
        onClick(fn){
            this.para.onclick=function(){
                console.log(this);
                console.log(this.para);
                this.para.style.background="red";
                this.para.style.color="black";
                this.para.style.lineHeight=3;
                fn();
            }.bind(this);
        }
      }  
      let p1=new Paragraph('The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node.js, with each component playing a role in the development process. MongoDB serves as a document-oriented database that can efficiently store data in JSON format. Express is a web application framework that provides a set of features to streamline the assembly of web applications. React is a front-end JavaScript library that offers a large toolkit for crafting user interfaces. Node.js is the runtime environment for execution of JavaScript code on the server side, coordinating communication between front-end and back-end components.');
      console.log(p1);
      p1.onClick(function(){console.log("Paragraph modified");    
      });

      class BluePara extends Paragraph{
        constructor(content){
            super(content);
            
        }
        onClick(fn){
            this.para.onclick=function(){
                console.log(this);
                console.log(this.para);
                this.para.style.background="blue";
                this.para.style.color="white";
                this.para.style.lineHeight=2;
                fn();
            }.bind(this);
        }

      }
      let p2= new BluePara();
      p2.onClick(function(){
        console.log("  ");
      });
}