## Immutable là gì?

- Immutable như là một đặc tính của một đối trường nào đó. Nó khiến cho dữ liệu không thể thay đổi khi được tạo, dẫn đến việc dễ dàng hơn rất nhiều trong việc phát triển ứng dụng.
- Không sao chép, cho phép ghi nhớ và phát hiện kịp thời những thay đổi là những điểm nổi bật cần nhắc đến của Immutable.

## Object.freeze()

- `Object.freeze()` ngăn chặn sửa đổi hoặc mở rộng giá trị hiện có của một đối tượng.
- Phương thức `Object.freeze` lấy một đối tượng và làm cho nó trở nên bất biến một cách hiệu quả.
- Các thuộc tính hiện có của nó có thể không được sửa đổi và các thuộc tính mới có thể không được thêm vào.

VD:

```js
let alligator = {
  canItFly: false,
};

Object.freeze(alligator);
alligator.canItFly = true;

console.log(alligator.canItFly); // vẫn là false
```

## Object.seal()

- Với `Object.seal()` chúng ta không thể `add new properties`, hoặc `delete một properties` nhưng chúng ta có thể `change value của một properties`.
