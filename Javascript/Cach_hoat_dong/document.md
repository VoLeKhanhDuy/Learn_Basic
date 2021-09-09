## Cách Javascript hoạt động

- CALL STACK

* Chạy lệnh từ trên xuống

- WEB APIS

* Những tác vụ nặng hoặc những tác vụ cần thời gian để chạy thì sẽ chạy ở đây
* VD: setTimeout, setInterval
* Nó sẽ chạy hết, thằng nào chạy xong sẽ được đưa vào CALLBACK QUEUE

- CALLBACK QUEUE

* Kiểm tra trong CALL STACK có còn lệnh nào chạy hay không?
* Nếu còn thì các lệnh trong CALLBACK QUEUE này đứng đợi cho đến khi nào CALL STACK trống
* Khi CALL STACK trống sẽ lấy từng hàm ở CALLBACK QUEUE vào chạy

- EVENTS LOOP

VD:

```JS
function sayHello() {
    console.log("Hello 1");
    console.log("Hello 2");
    console.log("Hello 3");
}
sayHello();

setTimeout(function() {
    console.log("Run setTimeout!");
}, 5000); // 0 hay bất kỳ số nào vẫn chạy như luồng ở dưới

console.log("Hello 4");
```

- Trước tiên sẽ chạy từ trên xuống là chạy hàm `sayHello()` trước - `CALL STACK`
- Lần lượt các `console.log` trong hàm `sayHello()` sẽ được chạy - `CALL STACK`
- Sau đó nó sẽ gặp `setTimeout()`, nó sẽ đẩy `setTimeout()` vào trong `WEB APIS` (lúc này là từ `CALL STACK` đẩy sang `WEB APIS`)
- Các hàm bên trong `WEB APIS` sẽ đẩy xuống `CALLBACK QUEUE` và đợi
- Tiếp đến sẽ chạy `console.log("Hello 4")` - `CALL STACK`
- Sau khi `CALL STACK` đã chạy xong hết thì `CALLBACK QUEUE` mới đẩy các hàm đang đợi ở đó lên `CALL STACK` để chạy
