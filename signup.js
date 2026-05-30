// ES6 Arrow Function for signup process
const handleSignup = (event) => {
    event.preventDefault();

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const confirmPassword = document.getElementById('confirmPassword').value;
   const message = document.getElementById('message');


   if (password !== confirmPassword) {
    message.style.color = 'red';
    message.innerHTML = 'Passwords do not match';
    return;
   }else if (password == confirmPassword){
    message.style.color = 'green';
    message.innerHTML = 'Passwords match';
   }

   const userdata = {email: email, password: password}
       localStorage.setItem("Hashir-user", JSON.stringify(userdata));
}

document.getElementById("signupForm").addEventListener("submit", handleSignup)