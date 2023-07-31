const people = ["sally", "ally", "John"];
const peopleCopy = [...people];
peopleCopy[2] = "New";
console.log("copy1", peopleCopy);
console.log("orignal1", people);

// with Array method

const newPeople = people.with(2, "Newer");

console.log("Newer1", newPeople);
console.log("orignal1", people);

// toSorted Array method
const sortedPeople = people.toSorted();

console.log("Sorted1", sortedPeople);
console.log("orignal1", people);

// toReversed Array method

const reversedPeople = people.toReversed();

console.log("Reversed1", reversedPeople);
console.log("orignal1", people);
