/*
    concat() : nối 2 mảng (mảng ban đầu không bị thay đổi)
    push() : thêm một hoặc nhiều phần tử vào cuối mảng và trả về ĐỘ DÀI mới của mảng (mảng ban đầu bị thay đổi)
    pop() : xóa phần tử cuối mảng và trả về PHẦN TỬ ĐÃ XÓA  (mảng ban đầu bị thay đổi)
    shift() : đẩy phần tử đầu tiên của mảng ra khỏi mảng (mảng ban đầu bị thay đổi)
    unshift() : đưa phần tử mới vào đầu mảng (trả về độ dài mới của mảng, mảng ban đầu bị thay đổi) 
    toString() : chuyển array sang chuỗi 
    join() : chuyển các phần tử trong mảng thành chuỗi
    splice(vị_trí_đặt_con_trỏ, số_lượng_phần_tử_muốn_xóa)
    splice(vị_trí_đặt_con_trỏ, 0, 'Chuỗi_muốn_chèn_vào') : chèn hoặc thay đổi một phần tử cho mảng
    slice(vị_trí_bắt_đầu_cắt, vị_trí_kết_thúc_cắt) : cắt phần tử của mảng
*/


var courses = [
    {
        id: 1,
        name: 'PHP',
        coin: 100
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'JS',
        coin: 100
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 0
    },
];

/* forEach */
courses.forEach(function(course, index) { // duyệt qua từng phần tử của mảng
    console.log(index, course);
});
/* every: kiểm tra tất cả phần tử trong mảng thỏa điều kiện nào đó (trả về Bool) */
var isFreeE = courses.every(function(course, index) { 
    return course.coin === 0; // nó sẽ kiểm tra từng phần tử của mảng đến khi có điều kiện sai thì trả ra False
});
/* some: kiểm tra MỘT phần tử trong mảng thỏa điều kiện thì trả về là True (trả về Bool) */
var isFreeS = courses.some(function(course, index) { 
    return course.coin === 0; // kiểm tra từng phần tử trong mảng, cái nào thỏa điều kiện thì trả ra True
});



Array.isArray(); // Kiểm tra có phải là một mảng hay không.

var a = [1, 2, 3];
var b = [10, 20];
var c = 5;
a.concat(b);    // => [1, 2, 3, 10, 20]
a.push(c);      // => 4 
a.pop();        // => 3 . Vì 3 là phần tử cuối cùng trong mảng a
a.shift();      // => 1
a.unshift(5);   // => 4
//-----------------------------------------------------------------------------------------
/*
    map() : biến đổi 1 cái gì đó thành 1 cái gì đó (biến đổi các phần tử trong mảng đấy thành các phần tử mới)
    Trả về một mảng mới
*/
var numbers_map = [1, 2, 3, 4];
var squaredNumbers = numbers_map.map(function(x) { // x: đại diện từng phần tử trong mảng numbers
    return x*x;
});
console.log(squaredNumbers); // => [1, 4, 9, 16]

//BT dùng map để biến đổi rectangles thành một mảng mới có diện tích các hình trên
var rectangles = [
    { width: 10, height: 5},
    { width: 10, height: 20},
    { width: 4, height: 16}
];
var dienTich = rectangles.map(function(rectangle) {
    return rectangle.width * rectangle.height;
});
/* Cách 2 
    var dienTich = rectangles.map(rectangle => rectangle.width * rectangle.height);
    });
*/
console.log(dienTich);
console.log('-------------------------');

//-----------------------------------------------------------------------------------------

/*
    filter: hiểu như một cái màn lọc. Những cái không đủ điều kiện sẽ không được đi qua màn lọc đó
    Trả về CÁC GIÁ TRỊ thỏa điều kiện
*/
var numbers_fil = [1, 2, 3, 4];
numbers_fil.filter(function(x) { // x: đại diện từng phần tử trong mảng numbers_fil
    x % 2 === 0; // xét mảng numbers_fil nếu giá trị nào chia hết cho 2 thì sẽ nhận
});
console.log(numbers_fil); // => [2, 4]
console.log('-------------------------');


//-----------------------------------------------------------------------------------------

/*
    find: trả về một giá trị nào đó thỏa điều kiện và dừng lại không chạy tiếp nữa. (trả về 1 thằng thôi)
*/
var numbers_find = [1, 2, 3, 4];
numbers_find.find(function(x) { // x: đại diện từng phần tử trong mảng numbers_find
    x % 2 === 0; // xét mảng numbers_find nếu giá trị nào chia hết cho 2 thì sẽ nhận và dừng vòng lặp
});
console.log(numbers_find); // => 2
console.log('-------------------------');


//-----------------------------------------------------------------------------------------

/*
    reduce(): nhận về một kết quả cuối cùng sau khi thực hiện tính toán trong một mảng
*/
var numbers_reduce = [1, 2, 3, 4];
numbers_reduce.reduce(function(a, b) { // lấy 1 + 2 = 3 sau đó lấy 3 + 3 = 6 sau đó lấy 6 + 4 = 10
    return a + b;
});
// tham số của function: 
//  - tham số 1 là kết quả của bước trước đó
//  - tham số 2 là giá trị hiện tại
//BT dùng reduce tính tổng của đơn hàng
var orders = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 6, unitPrice: 50 },
    { name: 'C', quantity: 10, unitPrice: 300 }
];
var tong = orders.map(function(order) {
    return order.quantity * order.unitPrice;
});
var TONG = tong.reduce(function(so1, so2){
    return so1 + so2;
});
console.log(TONG);

//reduce có tham số thứ 2: Nó sẽ chạy nhiều hơn 1 lần so với reduce không có tham số thứ 2
var numbers_reduce2 = [1, 2, 3, 4];
numbers_reduce2.reduce(function(a, b) {
    return a + b;
}, 0); // lấy 0 + 1 = 1 sau đó lấy 1 + 2 = 3 sau đó lấy 3 + 3 = 6 sau đó lấy 6 + 4 = 10
// Bài tập
var products = [
    { name: 'A', quantity: 2, unitPrice: 10 },
    { name: 'B', quantity: 3, unitPrice: 20 },
    { name: 'C', quantity: 4, unitPrice: 30 }
];
var total = products.reduce(function(currentTotal, product) {
    return  currentTotal + product.quantity * product.unitPrice;
}, 0); // tham số thứ 2 được chọn dựa vào tiêu chí cuối cùng mà mình muốn.
       // nó giống như khai báo giá trị ban đầu cho 1 biến. VD:  var tong = 0;

//Bài tập (tt): Sử dụng reduce để mảng trả về là '<Tom><Bill><Nan>'
var items = ['Tom', 'Bill', 'Nan'];
var items_reduce = items.reduce(function(result, item) {
    return result + "<" + item + ">";
}, "");
console.log("Reduce 2: " , items_reduce);

console.log('-------------------------');

//--------------------------------------------------------------------------------------
/* Bài tập:
    Cho : var products = [{name: 'A', unitPrice: 100, quantity: 10, category: 'QW'}];
    - filter các sản phẩm nằm trong một category
    - tính tổng số tiền hàng còn trong kho
    - chọn ra các sản phẩm có tiền hàng tồn > 500
*/ 
var products = [
    {name: 'A', unitPrice: 100, quantity: 10, category: 'QW'},
    {name: 'B', unitPrice: 300, quantity: 2, category: 'WW'},
    {name: 'C', unitPrice: 50, quantity: 5, category: 'EW'},
    {name: 'D', unitPrice: 70, quantity: 3, category: 'QW'},
    {name: 'E', unitPrice: 90, quantity: 10, category: 'WW'},
];
// filter các sản phẩm nằm trong một category
var products_filter = products.filter(function(product) {
    return product.category === 'WW';
});
console.log(products_filter);
// tính tổng số tiền hàng còn trong kho
var products_map = products.map(function(product) {
    return product.unitPrice * product.quantity;
});
var products_reduce = products_map.reduce(function(products_map1, products_map2) {
    return products_map1 + products_map2;
});
console.log(products_reduce);
// chọn ra các sản phẩm có tiền hàng tồn > 500
var products_filter2 = products_map.filter(function(products_map_true) {
    return products_map_true > 500 ;
});
console.log(products_filter2);
console.log('-------------------------');

//Includes (sử dung cho: string, array)
var title = "Responsive web design";
                                  //Nếu truyền vào số âm thì sẽ lấy độ dài mảng trừ cho số âm đó
                                  //Vị trí bắt đầu tìm kiếm (index)
console.log(title.includes('web'), 0); // -> true (trong biến title có chứa chuỗi là web nên trả về true)

//VD 2:
var courses = ['Javascript', 'PHP', 'Java'];
console.log(courses.includes('PHP')); // -> true    
//--------------------------------------------------------------------------------------




