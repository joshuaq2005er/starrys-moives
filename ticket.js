/*
==========================================
 CinemaBook Pro
 Ticket Generator
==========================================
*/


function loadTicket(){


let bookings =
getBookings();



if(bookings.length===0){

document.getElementById(
"ticketInfo"
).innerHTML=
"No booking found";

return;

}



let booking =
bookings[
bookings.length-1
];



let info = `


<div class="ticket-row">

<strong>
Customer
</strong>

<span>
${booking.customer}
</span>

</div>



<div class="ticket-row">

<strong>
Movie
</strong>

<span>
${booking.movie}
</span>

</div>



<div class="ticket-row">

<strong>
Theater
</strong>

<span>
${booking.theater}
</span>

</div>



<div class="ticket-row">

<strong>
Show Time
</strong>

<span>
${booking.showtime}
</span>

</div>



<div class="ticket-row">

<strong>
Seats
</strong>

<span>
${booking.seats.join(", ")}
</span>

</div>



<div class="ticket-row">

<strong>
Food
</strong>

<span>
${booking.food.length}
items

</span>

</div>



<div class="ticket-row">

<strong>
Total
</strong>

<span>
${booking.total}
</span>

</div>



<div class="ticket-row">

<strong>
Date
</strong>

<span>
${booking.date}
</span>

</div>


`;



document.getElementById(
"ticketInfo"
)
.innerHTML=info;



new QRCode(
document.getElementById(
"qrcode"
),
{

text:

JSON.stringify(
booking
),

width:150,

height:150

}

);



}



document.addEventListener(
"DOMContentLoaded",
loadTicket
);
