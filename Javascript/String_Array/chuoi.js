var firstName = "Khanh";
var lastName = "Duy";

console.log(`Ten day du la: ${firstName} ${lastName}`); // Template String

//Làm việc với chuỗi
/* find index */
var myString = "Con meo cua toi mau den meo meo";
console.log(myString.indexOf("meo")); // trả về ký tự đầu tiên
console.log(myString.indexOf("meo", 5)); // trả về ký tự sau ký tự thứ 5
console.log(myString.lastIndexOf("meo")); // trả về ký tự cuối cùng

/* Cắt chuỗi */
var myString2 = "Con meo cua toi mau vang";
console.log(myString2.slice(4,7)); // trả về chuỗi được cắt từ index 4->7

/* Ghi đè chuỗi - Replace */
console.log(myString2.replace("meo", "cho")); // chuỗi từ "meo" -> "cho"
console.log(myString.replace(/meo/g, "cho")); // Dùng biểu thức chính qui //g để đổi toàn bộ "meo" -> "cho"

/* Bỏ đi khoảng trắng ở trước và cuối chuỗi - Trim */
var myString3 = "   Khanh Duy    ";
console.log(myString3.trim()); // Loại bỏ khoảng trước đầu và cuối chuỗi

/* Chuyển đổi từ chuỗi sang Array */
var frontEnd = "HTML, CSS, JS, REACT"; // Điểm chung , 
console.log(frontEnd.split(", ")); // Tìm điểm chung giữa các chuỗi rồi đem vào split

var name = "Vo Le Khanh Duy";
var ho = name.slice(0, name.indexOf(" "));
var ten = name.slice(name.lastIndexOf(" "), name.length);
console.log(ho + ten);
