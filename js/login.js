document.getElementById('btn-submit').addEventListener('click',function(){
    //get the email DDRESS INSIDE THE INPUT FILD
    // always remenber to use .value to get text from a input field

   const emailField= document.getElementById('user-email');
   const email=emailField.value;
   //get password

   const passwordField=document.getElementById('user-password');
   const password=passwordField.value
//    console.log(email,password);

 //easy personal way
 if(email== 'adnanrony19@gmail.com' && password=='adnanadnan')
 {
    console.log('valid user');
 }
 else{
    alert('invalid user');
 }

})