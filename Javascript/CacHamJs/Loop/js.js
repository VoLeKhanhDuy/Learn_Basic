
var employees = [
    { name: "Duy1", age: 21},
    { name: "Duy2", age: 22},
    { name: "Duy3", age: 23}
];
/*
employee: đại diện cho từng phần {} tử trong mảng employees
for...of lặp qua các phần tử có trong mảng
for(var employee of employees){
    console.log("Tên: " + employee.name + ", tuổi: " + employee.age);
}
*/

/*
Bài thực tế
var content = "";

for(var employee of employees){
    content += "<li>" + employee.name + "<li>";
}

document.getElementById('contact-list').innerHTML = content;
*/
//----------------------------------------------------------------

var myCat = {
    name: 'Mew',
    age: 2,
    weight: 5
};
//for..in lặp qua các key trong 1 object
for(var key in myCat){
    console.log(key + ": " + myCat[key]);
    // console.log(key + ": " + myCat['name']);
}