
/*
    Định nghĩa key: value cho object
    Định nghĩa method cho object
    Định nghĩa key cho object dưới dạng biến
 */

var name = 'Javascript';
var price = 1000;

var course = {
    name: name,
    price: price,
    getName: function() {
        return name;
    }
};
// Có thể viết ngắn gọn thành 
/*
    var course = {
        name,
        price,
        getName() {
            return name;
        }
    };
*/


var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'Javascript',   // -> name: "Javacript"
    [fieldPrice]: '1000'         // -> price: 1000
};

