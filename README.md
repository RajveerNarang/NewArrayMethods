# 4NewArrayMethods

**All these Array Methods maintain immutability of the array meaning it keeps the orignal array unchanged and all the Changes that are made are in a seprate Copy of an Array**



## With Array Method

*With Method is used to replace an old element in the Array with a new one*
with a line of code as simple as

```
const newPeople = people.with(2, "Newer");
```
The above line of code is responsible for replacing the element (value) located at **position 2** in the array with the new value (Newer).


## toSorted Array Method

*toSorted Method as the name suggests transforms the array to a sorted array , while maintaing the above stated condition of immutability of the orignal Array*

```
const sortedPeople = people.toSorted();
```

 ## toReversed Array Method

*toReversed Method transforms the array to a reversed sorted array , while maintaing immutability of the orignal Array*

```
const reversedPeople = people.toReversed();
```


## toSpliced Array Method

*toSpliced Method splices the array with parameters as refrence , while maintaing immutability of the orignal Array*

```
const splicedPeople = people.toSpliced(2, 1, "Spliced");
```

```
const splicedPeople = people.toSpliced(x, y, "element value to be replaced or added");
```

In the above line of code x denotes the starting location for splicing and y denotes the number of elements to be spliced. 
