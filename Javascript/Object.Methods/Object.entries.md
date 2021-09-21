## Object.entries()

- `Object.entries()` là một method tạo một nested array với `key/value` của một Object.

```js
// Initialize an object
const operatingSystem = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Source",
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);
// Output
[
    0: ["name", "Ubuntu"]
    1: ["version", 18.04]
    2: ["license", "Open Source"]
]
length: 3
```
