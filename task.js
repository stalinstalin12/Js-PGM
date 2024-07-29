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
console.log("\n\n list cities");
people.forEach(i => {
    console.log(i.city);
});

//find
console.log("find\n\n\n youngest person");
