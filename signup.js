// ES6 Arrow Function for signup process
const handleSignup = () => {
    event.preventDefault();

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const confirmPassword = document.getElementById('confirmPassword').value;

   if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
   }

   const userdata = {email: email, password: password}
   localStorage.setItem("Hashir-user", JSON.stringify(userdata));

   alert("Signup Successful");
}

document.getElementById("signupForm").addEventListner("submit", handleSignup)