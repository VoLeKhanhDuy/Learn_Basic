/*
    JSON: là một định dạng dữ liệu (chuỗi)
    Dạng JSON: String, Number, Boolean, Null, Array, Object 

    Mã hóa      / Giải mã
    Encode      / decode
    Stringify: từ JS -> JSON
    Parse: từ JSON -> JS

*/

var a = '1';
console.log(JSON.parse(a)); // -> 1
console.log(JSON.stringify(1)); // -> '1'