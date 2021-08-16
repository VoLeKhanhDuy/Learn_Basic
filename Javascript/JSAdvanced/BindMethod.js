/* BIND: ràng buộc */

this.firstName = "Khánh";
this.lastName = "Duy";

const teacher = {
    firstName: "Võ",
    lastName: "Lê",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Case 1:
console.log(teacher.getFullName()); // => Võ Lê

// Case 2:
const getTecherName = teacher.getFullName
/*
    getFullName ở đây không phải là gọi hàm vì không có ()
    Ở đây teacher.getFullName chưa được gọi hàm mà chỉ là truy cập vào function 
    Function bản chất là một object (object thì là dạng tham chiếu) nên khi gán một giá trị tham chiếu 
    thì thực chất chỉ là sao chép cái vùng nhớ sang biến getTacherName
*/
console.log(getTecherName); // => Khánh Duy
/*
    Khi gọi một hàm không thông qua một đối tượng (có dấu . đằng trước hàm) thì từ khóa this sẽ trỏ ra Global
    nên nó lấy 2 biến ở Global 
*/

/* đặt vấn đề: giả sử lúc code thì ta gán một hàm cho một biến để code ngắn gọn hơn thì ta sử dụng Bind */
const getTecherName = teacher.getFullName.bind(teacher) // => Võ Lê

/* VD */

var $ = document.querySelector.bind(document); // => Sử dụng: $('.class');
var $$ = document.querySelectorAll.bind(document); // => Sử dụng: $('.class');
