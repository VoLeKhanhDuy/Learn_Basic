/*
    Call(): là phương thức trong prototype của Function constructor
            phương thức này dùng để gọi hàm và cũng có thể bind  this cho hàm
    Sự khác nhau giữa bind this và call:
        bind: chỉ bind this và trả ra hàm mới cái this mới chứ không gọi hàm
        call: bind this và gọi luôn hàm đó
        bind nghĩa là ràng buộc thôi còn call là gọi, nên call là ràng buộc và gọi luôn

*/

// Gọi hàm với call method
function random() {
  console.log(Math.random());
}
random(); // Cách thường gọi hàm random()
/**
 * Enzin của Js sẽ gọi tới phương thức call để nó thực hiện gọi hàm.
 */

random.call(); // Cách sử dụng call

//-----------------------------------

// Gọi hàm và bind this
const teacher = {
  firtName: "Tran",
  lastName: "Linh",
};

const me = {
  firtName: "Khanh",
  lastName: "Duy",
  showFullName() {
    console.log(`${this.firtName} ${this.lastName}`);
  },
};

me.showFullName(); // => Khanh Duy
me.showFullName.call(); // undefined undefined. Trong trường hợp này this không phải là me nữa mà là window
me.showFullName.call(me); // => Khanh Duy
me.showFullName.call(teacher); // => Tran Linh ===> KỸ THUẬT MƯỢN HÀM. Vì teacher không có hàm showFullName

//----------------------------

// Kế thừa trong OOP
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  Animal.call(this, name, weight); // kế thừa
  this.legs = legs;
}

//----------------------------

// Mượn hàm
function logger() {
  // Ban đầu arguments không hỗ trợ các hàm như forEach, filter, map,...
  // Nên ta mới mượn từ Array bằng cách gọi hàm call
  // Array.prototype: là constructor của Array
  const arr = Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
logger(1, 2, 3, 4, 5, 6);
