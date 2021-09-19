/*  This: mô tả một đối tượng mà nó thuộc về
    - Cách nhận biết đơn giản: cứ thằng nào chấm tới phương thức đó thì this chính là thằng đó
    - Đứng ngoài phương thức, this tham chiếu tới đối tượng Global

    *Lưu ý:
    - this trong hàm tạo là đại diện cho đối tượng được tạo
*/

const S20FE = {
  name: "Samsung S20 FE",
  color: "Black",
  weight: 200,

  takePhoto() {
    console.log("Take Photo");
    console.log(this); // trả về chính đối tượng mà takePhoto() đang thuộc về
    // => trả về S20FE = { ... }
  },

  objChild: {
    methodChild() {
      console.log(this);
    },
  },
};

console.log(S20FE.takePhoto()); // => this ở dòng 13 chính là S20FE
S20FE.objChild.methodChild(); // => this ở dòng 19 chính là objChild

/* ================================================================== */
function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;

  this.run = function () {
    console.log("Running.....", this);
  };
}

const mercedes = new Car("Mecerdes", "Red", 300);
console.log(mercedes.run()); // => this ở dòng 34 chính là mercedes
