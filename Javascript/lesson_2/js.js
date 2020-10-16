var boxElement = document.querySelector('.box'); 
//Thêm 1 nội dung của 1 thẻ HTML
//<h1></h1>: Element node, Đây là h1: text node
boxElement.innerHTML = '<h1>Đây là H1</h1>';
//Có thể thêm thuộc tính vào element node bằng innerHTML
boxElement.innerHTML = '<h3 title="heading">Đây là H3</h3>';