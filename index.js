let m = new Map();
console.log(m);

// add values to a hashmap

m.set(10, 2);
m.set(1, 3);
m.set(1000, 4);
m.set(10000, 5);
m.set(100000, 6);
m.set(1000000, 7);

console.log(m);

//loop over a hashmap

for (t of m.values()) {
  console.log(t);
}

//delete a key
m.delete(1);
m.clear();
console.log(m);
