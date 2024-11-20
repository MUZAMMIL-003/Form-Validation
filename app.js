var usernameData = false;
function dataSubmit(e) {
    e.preventDefault();
    // // arr.push({user, email, pass})
    
    // var user = document.getElementById("user");
    // var email = document.getElementById("email");
    // var pass = document.getElementById("pass");
    // // var male = document.getElementById("m");
    // // var female = document.getElementById("fm");
    
    
    // var arr = []

    // var data = {
    //     user : user.value,
    //     email: email.value,
    //     pass: pass.value
    // }
    // // data .push(arr)
    // // console.log(user.value, email.value, pass.value)
}
function validInput(e) {
    if (e.target.value.length < 3 ) {
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.innerText = "At Least 3 Characters Required"
        e.target.nextElementSibling.style.display = "block";
        return;
    }
    e.target.nextElementSibling.style.display = "none";
    usernameData = true;
}