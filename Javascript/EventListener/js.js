
// 1. Xử lý nhiều việc khi một event xảy ra
var btn = document.getElementById('btn');

// - Sử dụng DOM Event
btn.onclick = function() {
    console.log('Việc 1');
    console.log('Việc 2');
    alert('Việc 3');
}
// 2. Lắng nghe / hủy bỏ lắng nghe
setTimeout(function() {
    btn.onclick = function() {
        console.log('Việc 1');
        console.log('Việc 2');
        alert('Việc 3');
    }
}, 3000)
// -------------------------------------------
// Sử dụng Event Listener
btn.addEventListener('click', function(e) {
    console.log(Math.random());
});

function viec1() {
    console.log('Việc 1');
}
function viec2() {
    console.log('Việc 2');
}
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
// Gỡ việc 1 sau 3s
setTimeout(function() {
    btn.removeEventListener('click', viec1)
}, 3000);

