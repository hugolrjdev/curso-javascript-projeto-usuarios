var name = document.querySelector('#exampleInputName');
var gender = document.querySelectorAll('#form-user-create [name=gender]:checked');
var birth = document.querySelector('#exampleInputBirth');
var country = document.querySelector('#exampleInputCountry');
var email = document.querySelector('#exampleInputEmail');
var password = document.querySelector('#exampleInputPassword');
var file = document.querySelector('#exampleInputFile');
var admin = document.querySelector('#exampleInputAdmin');


var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach( (field, index) => {
    if(field.name === "gender"){
        if(field.checked) {
            console.log(field.id);
        }
    }else {
        console.log(field.id);
    };

   // console.log(field, index, field.name, field.id, field.checked, field.value)
})

