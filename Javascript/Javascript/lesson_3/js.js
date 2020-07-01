var boxElement = document.querySelector('.box');
/*
    boxElement.style.width = '200px';
    boxElement.style.height = '200px';
    boxElement.style.backgroundColor = 'green';
*/
//CSS INLINE
// Có thể viết ngắn gọn như sau:
Object.assign(boxElement.style, {
    width: '300px',
    height: '250px',
    backgroundColor: 'red'
});