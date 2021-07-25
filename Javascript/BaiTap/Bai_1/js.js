document.addEventListener("DOMContentLoaded", function(){
    var nut = document.querySelectorAll('button');
    var khoi = document.querySelectorAll('div');

    nut[0].onclick = function() {
        khoi[0].classList.toggle('move');
    }
}, false)

/* Bài tập 2 */
var btnBT2 = document.getElementById("baitap2");
btnBT2.onclick = function() {
    alert('Xin chào man!');
}

/* Bài tập 3 - Kiểm tra SNT */
var kiemTraSNT = function(so, i = 2) {  
    if(i == so) return true;
    if(so % i == 0) return false;
    return kiemTraSNT(so, i + 1);
}

/* Bài tập 4 */
var btn1BT4 = document.getElementById('btn1-BT3');
var btn2BT4 = document.getElementById('btn2-BT3');
var noiDung = document.getElementById('content');
btn1BT4.onclick = function() {
    noiDung.innerHTML = "Mày vừa click vào Click 1 đúng không?";
}
btn2BT4.onclick = function() {
    noiDung.innerHTML = "Mày vừa click vào Click 2 đúng không?";
}

/* Bài tập for */
function inSoTu1DenNumber() {
    var number = document.getElementById("number").value;
    number = parseInt(number);
    var html = "";
    for(var i = 1; i <= number; i++) {
        html += i + " ";
    }
    document.getElementById("result").innerHTML = html;
}

function cacSoNguyenToTu1DenNumber() {
    var number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);
    var html1 = "";
    for(var i = 1; i <= number1; i++) {
        if(kiemTraSNT(i)) {
            html1 += i + " ";
        }
    }
    document.getElementById("result1").innerHTML = html1;
}