// var / let, const: scope (phạm vi truy cập), hosting (đưa lên trên đầu)
// const / var, let: assigment (gán lại giá trị)

/*
    VAR: sẽ truy cập được ở NGOÀI khối code, được hổ trợ hosting
    LET, CONST: không truy cập được ở NGOÀI khối code, không hổ trợ hosting
    ----
    VAR, LET: có thể gán lại giá trị khác
    CONST: KHÔNG thể gán lại TOÁN TỬ GÁN cho giá trị khác
    ----
    Code thuần: dùng var
    Babel: const, let
    Khi định nghĩa biến và không gán lại biến đó thì dùng CONST
*/
//Hosting 
a = 1;
var a;
console.log(a); // var sẽ in ra được a = 1, vì nó sẽ nhấc thằng var a lên đầu