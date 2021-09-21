## Object.is()

- Object.is() có nhiệm vụ so sánh hai đối tượng có bằng nhau hay không? Trước đây thì có toán tử == và ===

```js
// Object.is(0 , ' '); //false
// Object.is(null, undefined); //false
// Object.is([1], true); //false
// Object.is(NaN, NaN); //true

console.log('Object.is(0 , " ")', Object.is(0, " ")); // false
console.log("Object.is(null , undefined)", Object.is(null, undefined)); // false
console.log("Object.is([1] , true)", Object.is([1], true)); // false
console.log("Object.is(NaN , NaN)", Object.is(NaN, NaN)); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true
const n = 15;
Object.is(0n, -0n); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```
