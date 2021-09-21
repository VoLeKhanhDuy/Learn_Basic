## Object.keys()

- `Object.keys()` là một method dùng để tạo ra một Array với tất cả key của một Object.

```js
// Initialize an object
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

Output[("boss", "secretary", "sales", "accountant")];
```

## Object.values()

- `Object.values()` là một method ngược lại với `Object.keys()` thì nó tạo một new Array với tất cả những giá trị của một object.

```js
// Initialize an object
const session = {
  id: 1,
  time: `26-July-2018`,
  device: "mobile",
  browser: "Chrome",
};

// Get all values of the object
const values = Object.values(session);

console.log(values);
Output[(1, "26-July-2018", "mobile", "Chrome")];
```
