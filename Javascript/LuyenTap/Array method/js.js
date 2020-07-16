/*
    concat() : nối 2 mảng (mảgn ban đầu không bị thay đổi)
    push() : trả về độ dài mới của mảgn khi thêm 1 phần tử vào (mảng ban đầu bị thay đổi)
    pop() : lấy ra phần tử cuối cùng (mảng ban đầu bị thay đổi)
    shift() : đẩy phần tử đầu tiên của mảng ra khỏi mảng (mảng ban đầu bị thay đổi)
    unshift() : đưa phần tử mới vào đầu mảng (trả về độ dài mới của mảng, mảng ban đầu bị thay đổi)  
*/

var a = [1, 2, 3];
var b = [10, 20];
var c = 5;
a.concat(b);    // => [1, 2, 3, 10, 20]
a.push(c);      // => 4 
a.pop();        // => 3 . Vì 3 là phần tử cuối cùn tron mản a
a.shift();      // => 1
a.unshift(5);   // => 4
//-----------------------------------------------------------------------------------------
/*
    map() : biến đổi 1 cái gì đó thành 1 cái gì đó (biến đổi các phần tử trong mảng đấy thành các phần tử mới)
    Trả về một giá trị mới
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
    Trả về giá trị thỏa điều kiện
*/
var numbers_fil = [1, 2, 3, 4];
numbers_fil.filter(function(x) { // x: đại diện từng phần tử trong mảng numbers_fil
    x % 2 === 0; // xét mảng numbers_fil nếu giá trị nào chia hết cho 2 thì sẽ nhận
});
console.log(numbers_fil); // => [2, 4]
console.log('-------------------------');


//-----------------------------------------------------------------------------------------

/*
    find: trả về một giá trị nào đó thỏa điều kiện và dừng lại không chạy tiếp nữa.
*/
var numbers_find = [1, 2, 3, 4];
numbers_find.filter(function(x) { // x: đại diện từng phần tử trong mảng numbers_find
    x % 2 === 0; // xét mảng numbers_find nếu giá trị nào chia hết cho 2 thì sẽ nhận và dừng vòng lặp
});
console.log(numbers_find); // => 2
console.log('-------------------------');


//-----------------------------------------------------------------------------------------

/*
    reduce(): 
*/
var numbers_reduce = [1, 2, 3, 4];
numbers_reduce.reduce(function(a, b) { // lấy 1 + 2 = 3 sau đó lấy 3 + 3 = 6 sau đó lấy 6 + 4 = 10
    return a + b;
});
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
//--------------------------------------------------------------------------------------




