// https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

const countries = [
    {	country	:	"China",	population	:1401768800},
    {	country	:	"India",	population	:1359812346},
    {	country	:	"United States",	population	:329453849},
    {	country	:	"Indonesia",	population	:266911900},
    {	country	:	"Pakistan",	population	:218950520},
    {	country	:	"Brazil",	population	:211257279},
    {	country	:	"Nigeria",	population	:206139587},
];

let obj = arr.find(o => o.name === 'string 1');
let cont = countries.find(o => o.country === 'Brazil');
console.log(obj);
console.log(cont, cont.population)