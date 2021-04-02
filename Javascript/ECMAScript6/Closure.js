// Closure: là một biến có thể truy cập bên ngoài khối scope của nó

function sum (a, b) {
    const c = a + b;

    return function() {
        console.log(c); // nhận giá trị bên ngoài
    };
}
sum(1, 2)();


function debug(name) {
    return function(str) {
        console.log(`[${name}] ${str}`);
    };
}
const log = debug('mouse');
log('Error happend')