const people = ["sally", "ally", "John"];
const peopleCopy = [...people];
peopleCopy[2] = "New";

console.log("orignal1", people);
console.log("copy1", peopleCopy);

// with Array method

const newPeople = people.with(2, "Newer");

console.log("orignal1", people);
console.log("Newer1", newPeople);

// toSorted Array method
const sortedPeople = people.toSorted();

console.log("orignal1", people);
console.log("Sorted1", sortedPeople);

// toReversed Array method

const reversedPeople = people.toReversed();

console.log("orignal1", people);
console.log("Reversed1", reversedPeople);

// toSpliced Array Method

const splicedPeople = people.toSpliced(2, 1, "Spliced");

console.log("orignal1", people);
console.log("Spliced1", splicedPeople);
