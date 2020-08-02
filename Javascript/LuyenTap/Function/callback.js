
// Callback: khi truyền một hàm vào một hàm với tư cách là một tham số 
var coffeeMachine = {
    makeCoffee: function(onFinish) // truyền một hàm tên là onFinish
                {
                    console.log('Makin coffee');
                    onFinish(); // gọi lại hàm onFinish
                }
};

var beep = function() {
    console.log('Tít tít');
}

coffeeMachine.makeCoffee(beep); // truyền hàm beep vào hàm onFinish
coffeeMachine.makeCoffee(function() 
                            {
                                console.log('Bíp bíp');
                            }
                        )