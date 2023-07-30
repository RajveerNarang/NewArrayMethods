const people = ["sally", "ally", "John"];
const peopleCopy = [...people];
peopleCopy[2] = "New";
console.log("copy1", peopleCopy);
console.log("orignal1", people);

// with Array method

const newPeople = people.with(2, "Newer");

console.log("orignal1", people);
console.log("Newer1", newPeople);

// toSorted Array method
const sortedPeople = people.toSorted();

console.log("orignal1", people);
console.log("Sorted1", sortedPeople);
