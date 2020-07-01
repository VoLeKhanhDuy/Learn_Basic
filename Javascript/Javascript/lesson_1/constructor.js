

function User(firstName, lastName, Age, Address)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.Address = Address;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

//Thêm thuộc tính từ ngoài constructor
User.prototype.className = "Gì Gì đó...";


var author = new User("Duy", "Khánh", 20, "Vũng Liêm");
var user = new User("Dyi", "Võ", 22, "Vĩnh Long");

author.eat = "Gà quay";
user.drink = "Trà đường";

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());
