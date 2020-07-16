document.addEventListener("DOMContentLoaded", function(){
    var nut = document.querySelectorAll('button');
    var khoi = document.querySelectorAll('div');

    nut[0].onclick = function() {
        khoi[0].classList.toggle('move');
    }
}, false)