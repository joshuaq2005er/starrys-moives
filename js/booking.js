/*
==========================================
 CinemaBook Pro
 Booking System
==========================================
*/


let selectedSeats=[];

let selectedFood=[];


const rows=7;

const columns=5;



function createSeats(){


const grid=
document.getElementById(
"seatGrid"
);


grid.innerHTML="";



let theater =
document.getElementById(
"theater"
).value;



let bookings =
getBookings();



for(let r=1;r<=rows;r++){


for(let c=1;c<=columns;c++){



let seat =
String.fromCharCode(64+r)+c;



let div =
document.createElement(
"div"
);



div.className="seat";


div.innerHTML=seat;



let taken =
bookings.some(
b=>
b.theater==theater &&
b.seats.includes(seat)
);



if(taken){


div.classList.add(
"booked"
);


}


else{


div.onclick=()=>selectSeat(
div,
seat
);


}



grid.appendChild(div);



}


}



}



function selectSeat(element,seat){



if(element.classList.contains("selected")){


element.classList.remove(
"selected"
);


selectedSeats =
selectedSeats.filter(
x=>x!==seat
);


}

else{


element.classList.add(
"selected"
);


selectedSeats.push(
seat
);


}



calculateTotal();


}




function loadMovie(){


let movie =
localStorage.getItem(
"selectedMovie"
);



document.getElementById(
"movieTitle"
)
.innerHTML =
"🎬 "+movie;



}



function loadFood(){


const container=
document.getElementById(
"foodList"
);



let foods =
JSON.parse(
localStorage.getItem(
"concessions"
)
);



container.innerHTML="";



foods.forEach(food=>{


container.innerHTML += `


<label>


<input type="checkbox"
onchange="addFood(${food.id})">


${food.name}

-

$${food.price}


</label>

<br>


`;


});


}



function addFood(id){


let foods =
JSON.parse(
localStorage.getItem(
"concessions"
)
);



let item =
foods.find(
f=>f.id==id
);



if(selectedFood.includes(id)){


selectedFood =
selectedFood.filter(
x=>x!==id
);


}

else{


selectedFood.push(id);


}



calculateTotal();


}



function calculateTotal(){


let settings=
getSettings();


let total =
selectedSeats.length *
settings.adultPrice;



let foods =
JSON.parse(
localStorage.getItem(
"concessions"
)
);



selectedFood.forEach(id=>{


let item =
foods.find(
x=>x.id==id
);


total += item.price;


});



document.getElementById(
"total"
)
.innerHTML =
settings.currency+
total;



}



function completeBooking(){


let name =
document.getElementById(
"customerName"
).value;



if(!name){

alert(
"Enter your name"
);

return;

}



if(selectedSeats.length==0){

alert(
"Select seats"
);

return;

}



let bookings =
getBookings();



bookings.push({


id:
Date.now(),


customer:name,


movie:
localStorage.getItem(
"selectedMovie"
),


theater:
document.getElementById(
"theater"
).value,


showtime:
document.getElementById(
"showtime"
).value,


seats:selectedSeats,


food:selectedFood,


total:
document.getElementById(
"total"
).innerText,


date:
today()


});



localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);



alert(
"Booking Confirmed!"
);



window.location.href=
"ticket.html";



}




document
.getElementById(
"theater"
)
.addEventListener(
"change",
createSeats
);



document.addEventListener(
"DOMContentLoaded",
()=>{


loadMovie();

createSeats();

loadFood();


});
