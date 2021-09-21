## Object.assign()

- `Object.assign()` được sử dụng để sao chép các giá trị của tất cả thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng nguồn đến một đối tượng đích. Nó sẽ trả về đối tượng đích đó.

### Cú pháp

`Object.assign(target, ...sources)`

Trong đó:

- `targer`: Đối tượng đích
- `sources`: Các đối tượng nguồn

* Các thuộc tính trong đối tượng đích sẽ bị ghi lại bởi các thuộc tính trong đối tượng nguồn nếu chúng có cùng key. Tương tự, các thuộc tính nguồn sau sẽ ghi đè lên những thuộc tính nguồn trước.

VD:

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

- Cần lưu ý để đảm bảo tính bất biến thì tham số target nên luôn là `{}`, vì khi đó các giá trị của sources sẽ được sao chép vào đối tượng mới.

- Khi làm việc với nhiều object:

```js
let o1 = { a: 21 };
let o2 = { b: 22 };
let o3 = { c: 24 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // {a: 21, b: 22, c: 24}
```

- Gộp các object với cùng properties:

```js
let o1 = { a: 21, b: 22, c: 24 };
let o2 = { b: 25, c: 26 };
let o3 = { c: 27 };

let finalObj = Object.assign({}, o1, o2, o3);
console.log(finalObj); // {a: 21, b: 25, c: 27}
```
