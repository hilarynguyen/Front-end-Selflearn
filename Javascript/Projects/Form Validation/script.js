const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');

function validateForm() {
    let is_valid = true;
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    ageError.innerHTML = "";
    
    if(name.value === "" || name.value == null){
        name.style.border = '1px solid red';
        name.focus()
        nameError.innerHTML = "Name is required";
        is_valid = false;
    }
    if(age.value === "" || age.value == null){
        ageError.innerHTML = "Age is required";
        is_valid = false;
    } else if (isNaN(age) || age < 0) {
        ageError.innerHTML = "Age must be a positive number";
        is_valid = false;
      }
    if(email.value === "" || email.value == null){
        emailError.innerHTML = "Email is required";
        is_valid = false;
    }
    
    return is_valid;
}
