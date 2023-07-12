


function displayUser(userArray){
console.log(userArray);
const TBODY = $("#usersTable tbody");
for(let i =0;i<userArray.length;i++){
 let tr =`
 <tr>
    <td>${user.email}</td>
    <td>${user.fname + "" + user.lname}</td>
    <td>${user.age}</td>
    <td>${user.grade1}</td>
    <td>${user.grade2}</td>
    <td>${user.grade3}</td>
    <td>${user.getGPA}</td>

 </tr>
    `;
    TBODY.append(tr);
}
}

function init(){
    let userList = readUsers();
    displayUsers(userList);
}

window.onload=init;