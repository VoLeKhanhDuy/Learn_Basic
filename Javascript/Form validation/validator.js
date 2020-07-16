

function Validator(options) {

    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        var rules = selectorRules[rule.selector];
       
        for(var i = 0; i < rules.length; i++){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }
                
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid'); // Thêm class invalid vào form
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }
    

    var formElement = document.querySelector(options.form); // Lấy hết form

    if(formElement){

        formElement.onsubmit = function(e) {
            e.preventDefault();
            var isFormValid = true;

            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule); 
                if(!isValid){
                    isFormValid = false;
                }
            });


            
            
            if(isFormValid) {
                // Submit với JS
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        return (values[input.name] = input.value) && values;  
                    }, {});
                    options.onSubmit(formValues);
                }
                // Submit mặc định
                else {
                    formElement.submit();
                }
            }
        }

        options.rules.forEach(function(rule) {

            // Lưu lại các rule cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            

            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement){
                //Xử lý blur khỏi input
                inputElement.onblur = function() {
                   validate(inputElement, rule);              
                }

                //Xử lý khi người dùng nhập -> mất thông báo
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });   
    }
}





//Định nghĩa các rules

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng không bỏ trống!'
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng Email!';
        }
    };
}

// Rule độ dài
Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
}

// Rules nhập lại mật khẩu
Validator.isConformed = function(selector, getConformValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConformValue() ? undefined : message || 'Vui lòng kiểm tra lại giá trị vừa nhập!';
        }
    }
}