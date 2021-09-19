/*
   Nullish Coalescing Operator (??)
   Cú pháp: a??b
   - Nếu a được định nghĩa thì kết quả sẽ là a
   - Nếu a là Nullish (Null or Undefined) thì kết quả sẽ là b
*/
let a = NULL;
console.log(a ?? 50); // => 50
console.log(a); // => NULL
let a = 10;
let c = 30;
console.log(a ?? b ?? c ?? d); // => 10
// Trả về kết quả đầu tiên nếu a được xác định

//------------------------------------------------------------------

/*
    Logical Nullish Assignment (??=)
    Cú pháp: a ??= b Tương đương với a ?? (a=b) 
    - Nếu a không phải là NULLISH ( NULL or UNDEFINED ) thì kết quả sẽ là a. 
    - Nếu a là NULLISH thì kết quả sẻ là b, nhưng b sẽ có nhiệm vụ gán giá trị cho a.     
*/
let a = NULL;
console.log((a ??= 50)); //50
console.log(a); //50

//------------------------------------------------------------------

/*
    Optional Chaining Operator (?.)
    Cú pháp: obj ?. prop 
    - Những ai sử dụng obj.prop() thì biết là kiểm tra một thuộc tính có tồn tại hay không? 
      Ở đây khi sử dụng (?.) cũng được kết qủa tương tự như vậy
      Nhưng chỉ có khác một chút, nếu mà giá trị NULL or UNDEFINED thì luôn return về UNDEFINED. 
*/
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
