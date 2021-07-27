/* FUNCTION */
const square = (side: number) => side * side;

let greet: Function;
greet = () => console.log("Hi");

const add = (a: number, b: number, c?: number | string) => {
  // c: vừa có kiểu dữ liệu là number hoặc string
  // c?: là một tham số không bắt buộc, có cũng được không có cũng được
  console.log(a + b);
  console.log(c);
};
