- `Apply()`: cho phép gọi một hàm với một this(bind) và truyền đối số cho hàm gốc dưới dạng mảng.

---

## So sánh Apply, Bind, Call

### Giống nhau

- Đều gọi được như nhau
  VD:

  ```js
  function fn() {}
  fn.bind();
  fn.apply();
  fn.call();
  ```

- Đều được kế thừa từ `function.prototype`
  VD:
  ```js
  function fn() {}
  fn.bind() === Function.prototype.bind(true);
  fn.apply() === Function.prototype.apply(true);
  fn.call() === Function.prototype.call(true);
  ```

### Khác nhau

#### Bind method

- Trả ra hàm mới, với `this` sẽ tham chiếu tới `thisArg`
- Không thực hiện gọi hàm
- Nếu được bind kèm `arg1, arg2,...` thì đối số này sẽ được ưu tiên hơn

```js
const newFn = fn.bind(this.Arg, arg1, arg2, ...); // giá trị arg1, arg2, ... được ưu tiên hơn tại đây
newFn.(arg1, arg2, ...);
```

#### Call method

- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`

```js
fn.call(this, arg1, arg2, ...);
```

#### Apply method

- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`

```js
fn.apply(this, [arg1, arg2, ...]);
```
