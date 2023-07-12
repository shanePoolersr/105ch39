const KEY= "users";

function saveUser(user){
    let userList = readUsers();
    userList.push(user);
let val =JSON.stringify(usersList); // parse obj into string
localStorage.setItem(KEY,val); // send the string to the LS
}

function readUsers(){
    let users = localStorage.getItem(KEY);
   if (!user){//NOT users?
    return [];
    }else{
        let data = JSON.parse(users); // parse the string back into obj
        console.log(data);
        return data;
    }
}