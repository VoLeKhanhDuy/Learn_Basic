
/*------- XÓA MỘT PHẦN TỬ TRONG MẢNG/OBJECT MÀ KHÔNG SỬ DỤNG DELETE -------*/
// Chúng ta sẽ sử dụng Destructuring và spread operator

//Array
let courses = ["HTML", "CSS", "JAVASCRIPT", "VUEJS", "REACTJS"];
// Ví dụ: muốn xóa đi HTML trong mảng courses
// Vì mảng không có key nên chúng ta có thể để bất kỳ biến nào phù hợp với vị trí phần tử của mảng
const [a, ...rest] = courses;
console.log(a);     // => HTML
console.log(rest);  // => ["CSS", "JAVASCRIPT", "VUEJS", "REACTJS"]

//Object
let profile = {
    name: "Duy",
    age: 22,
    address: "Vũng Liêm",
    email: "vlkduy1999@gmail.com",
    phone: "0763997202",
};
// Ví dụ: muốn xóa đi thông tin age và phone trong object profile
let { age, phone, ...cloneProfile } = profile;
console.log("Các thông tin đã xóa: ", age, " ", phone); // => 22 0763997202
console.log("Các thông tin còn lại: ", cloneProfile); // => { name: "Duy", address: "Vũng Liêm", email: "vlkduy1999@gmail.com" }


/*-------------- XÓA TRÙNG LẶP TRONG MỘT MẢNG -----------------*/
// Chúng ta có thể dùng Set() và Operator()
let vehicles = ['bike', 'motobike', 'car', 'airplane', 'motobike']

// Sử dụng Array from và Set
let uniqueVehicle = Array.from(new Set(vehicles));
console.log(uniqueVehicle) // => ['bike', 'motobike', 'car', 'airplane']

// Sử dụng Operator ... và Set
let uniqueVehicle = [...new Set(fruits)];
console.log(uniqueVehicle) // => ['bike', 'motobike', 'car', 'airplane']
