// Muốn 1 hàm có thể nhận 1 hoặc 2 tham số
// ?: được gọi là Optional (có nghĩa là có cũng được không có cũng được)
const addOp = (a: number, b?: number) => (b ? a + b : a);

console.log(addOp(1, 2));
console.log(addOp(1));

// !: được gọi là Non null (có nghĩa là khi gọi cái hàm này thì nhất định sẽ truyền vào cái b)
const addNon = (a: number, b?: number) => a + b!;
