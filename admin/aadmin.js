/*
==========================================
 CinemaBook Pro
 Admin Authentication
==========================================
*/


const ADMIN_PASSWORD =
"1234testing";



function loginAdmin(){


let password =
document.getElementById(
"password"
).value;



if(password === ADMIN_PASSWORD){


sessionStorage.setItem(
"admin",
"true"
);



window.location.href =
"dashboard.html";


}

else{


document.getElementById(
"error"
)
.innerHTML =
"Incorrect password";


}



}



function checkAdmin(){


if(
sessionStorage.getItem(
"admin"
)!=="true"
){


window.location.href=
"login.html";


}



}
