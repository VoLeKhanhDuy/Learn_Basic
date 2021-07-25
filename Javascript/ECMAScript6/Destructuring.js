// Destructuring: phân rã
// Sử dụng cho Object và Array
var array = ['Javascript', 'PHP', 'Ruby'];

// Lấy ra từ thằng array lấy 3 phần từ a, b, c 
var [a, b, c] = array; // -> Javascript PHP Ruby
var [a, , c] = array; // -> Javascript Ruby

/*
    REST: lấy ra những phần còn lại
        - Sử dụng khi kết hợp với Destructuring
        - Sử dụng khi định nghĩa ra tham số
*/
//Rest vẫn còn là mảng
var [a, ...rest] = array; // -> Javascript ["PHP", "Ruby"]

//-----------------------------------------------------------------

// OBJECT
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image',
    children: {
        name: 'ReactJS'
    }
};
var { name, price, image } = course; // -> Javascript 1000 image
var { name, ...rest } = course // -> Javascript { price: 1000, image: "image" }
    //parentName: tự đặt tên mới cho name
    //để không bị trùng với name trong children
var { name: parentName, children: { name } } = course;
var { name, description = 'Default description' } = course;

//-------------------------------------------------------

function logger({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    console.log(rest);
}
logger({
    name: "Javascript",
    price: 100,
    description: "Description conten"
});  // -> Javascript 100 { Description conten }
