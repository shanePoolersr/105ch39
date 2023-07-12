// create user constructor
function user(email,password,firstName,lastName,age,grade1,grade2,grade3){
    this.email = email;
    this.password = password;
    this.fname = firstName;
    this.lname= lastName;
    this.age= age;
    this.grade1 = this.grade1;
    this.grade2 = this.grade2;
    this.grade3 = this.grade3;
    this.getGPA = (Number(this.grade1)+Number(this.grade2)+Number(this.grade3))/3;
    }


// get the inputs from the HTML using jQuery
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGrade1 =$("#txtGrade1");
let inputGrade2 =$("#txtGrade2");
let inputGrade3 =$("#txtGrade3");

function validateUser(){

}

function register(){
    // CREATE A NEW USER
    let newUser = new User(inputEmail.val(),inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputGrade1(),inputGrade2(),inputGrade3());
    // display the new user on console
    console.log(newUser.getGPA());
    saveUser

}

function init(){

}

window.onload=init;