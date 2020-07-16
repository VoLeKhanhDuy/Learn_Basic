/*
    array.sort(function(a, b) { }); //  => trả về mảng được sắp xếp
    a, b là 2 phần tử bất kì trong mảng

    Qui tắc:
    Trả về giá trị < 0 => a nằm trước b 
    Trả về giá trị > 0 => a nằm sau b   
    Trả về giá trị = 0 => giữ nguyên
*/

var numbers = [2, 9, 3, 4, 1];

//sắp tăng
var ascendingNumbers = numbers.sort(function(a, b) {
    //Cho a = 1; b = 5
    return a - b; // => [1, 2, 3, 4, 9]
});
//sắp giảm
var descendingNumbers = numbers.sort(function(a, b) {
    //Cho a = 1; b = 5
    return b - a; // => [9, 4, 3, 2, 1]
});

// Bài tập
var employees = [
    {name: 'A', age: 18},
    {name: 'B', age: 20},
    {name: 'C', age: 15},
    {name: 'D', age: 30}
];
//Sắp xếp tuổi từ trẻ đến già
var sortdEmployees = employees.sort(function(a, b){
    return a.age - b.age;
});

// Bài tập
// Cho products có thuộc tính (name, price, stock)
// Sắp xếp các price từ lớn đến nhỏ
// Sắp xếp các giá trị stock từ lớn đến nhỏ (stock * price)
var products = [
    {name: 'Banh', price: 200, stock: 3},
    {name: 'Keo', price: 100, stock: 20},
    {name: 'Rau', price: 150, stock: 10},
    {name: 'Mi', price: 500, stock: 15}
];
// Sắp xếp các price từ lớn đến nhỏ
var sortedProducts = products.sort(function(a, b) {
    // Cho a = 3; b = 20
    // Sắp từ lớn đến nhỏ là muốn b đứng trước a
    return b.price - a.price;
});
console.log(sortedProducts);
// Sắp xếp các giá trị stock từ lớn đến nhỏ (stock * price)
var sortedStock = products.sort(function(a, b) {
    // Cho a = 3 * 200, b = 150 * 10
    // Sắp từ lớn đến nhỏ là muốn 600 đứng trước 1500 nghĩa là a đứng trước b
    return (a.price * a.stock) - (b.price * b.stock);
});
console.log(sortedStock);
