/* ARRAY AND OBJECT */
let names = ["Dy", "Tuan", "Minh"];
names.push("Hao"); // nếu push khác kiểu dữ liệu ban đầu của mảng được tạo ra thì sẽ không được

let person = {
  name: "Dyi",
  age: 22,
  isStudent: true,
};
person.name = "Change name"; // ta sẽ không thay đổi giá trị trong object nếu không cùng kiểu dữ liệu với key
