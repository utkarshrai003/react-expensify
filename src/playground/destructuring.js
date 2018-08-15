const person = {
	name: 'utkarsh',
	age: 26,
	location: {
		city: 'Philadelphia',
		temp: 25
	}
};

// const name = person.name;
// const age = person.age;

const {name, age} = person;
console.log(`${person.name} is ${person.age}`);