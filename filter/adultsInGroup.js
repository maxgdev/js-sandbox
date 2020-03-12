// Using map & filter to find age > 18
// result: George, Eva

const group = [
    {name: 'Bobby', age: 13},
    {name: 'Arabella', age: 7},
    {name: 'George', age: 44},
    {name: 'Eva', age: 40},
];
  
function adultsInGroup(group) {
		return group.filter((person) => {
			return person.age > 18;
		}).map(adult => adult.name);
	}
	

console.log(adultsInGroup(group));
