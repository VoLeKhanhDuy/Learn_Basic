
/*
    VALUE TYPES: KIỂU THAM TRỊ 
    REFERENCE TYPES: KIỂU THAM CHIẾU

    ### 1.Value types (Primitive data types: kiểu dữ liệu nguyên thủy)
        * Các kiểu dữ liệu nguyên thủy chỉ lưu 1 giá trị
        - String
        - Number
        - Boolean
        - BigInt
        - Symbol
        - Undefined
        - Null

    ### 2.Reference types (Non-primitive data type: kiểu dữ liệu không nguyên thủy)
        * Lưu địa chỉ nơi giữ giá trị         
        - Object
        - Array
        - Function

    ## Data types with functions
        - Value types
        - Reference types
*/

// Ví dụ: Tham trị
let a = 1; // tạo ra biến a, cấp một ô nhớ, lưu vào ô nhớ
let b = a; // tạo ra biến b, cấp một ô nhớ khác, sao chép giá trị của a vào ô nhớ mới

let a = 2; // sửa giá trị trong ô nhớ của a thành 2
console.log(b); // => 1

// Ví dụ: Tham chiếu
const a = { name : 'Mercedes' } // tạo biến a, cấp một ô nhớ { name : 'Mercedes' } vào ô nhớ, trả về địa chỉ đã lưu và gán cho biến a. LƯU ĐỊA CHỈ VÀO BIẾN a
const b = a; // tạo biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a
a.name = 'BMW'; // sửa giá trị của key name trong ô nhớ thành BMW
console.log(b);