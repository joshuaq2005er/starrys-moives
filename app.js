/*
==========================================
 CinemaBook Pro
 Main Application JavaScript
==========================================
*/


// ========================================
// DATABASE INITIALIZATION
// ========================================


function initializeDatabase(){

    if(!localStorage.getItem("movies")){

        const movies = [

            {
                id:1,
                name:"Superman",
                genre:"Action",
                runtime:"2h 18m",
                rating:"PG-13",
                poster:
                "https://placehold.co/350x500?text=Superman"
            },


            {
                id:2,
                name:"Jurassic World",
                genre:"Adventure",
                runtime:"2h 12m",
                rating:"PG-13",
                poster:
                "https://placehold.co/350x500?text=Jurassic+World"
            },


            {
                id:3,
                name:"How To Train Your Dragon",
                genre:"Family",
                runtime:"1h 56m",
                rating:"PG",
                poster:
                "https://placehold.co/350x500?text=Dragon"
            },


            {
                id:4,
                name:"Minecraft Movie",
                genre:"Adventure",
                runtime:"1h 41m",
                rating:"PG",
                poster:
                "https://placehold.co/350x500?text=Minecraft"
            }

        ];


        localStorage.setItem(
            "movies",
            JSON.stringify(movies)
        );

    }



    if(!localStorage.getItem("settings")){


        const settings={

            cinemaName:
            "CinemaBook Pro",

            currency:"$",

            adultPrice:12,

            childPrice:8,

            seniorPrice:9,

            vipPrice:18,

            bookingFee:2

        };


        localStorage.setItem(
            "settings",
            JSON.stringify(settings)
        );

    }



    if(!localStorage.getItem("bookings")){


        localStorage.setItem(
            "bookings",
            JSON.stringify([])
        );


    }



    if(!localStorage.getItem("concessions")){


        const food=[

            {
                id:1,
                name:"Large Popcorn",
                price:8
            },


            {
                id:2,
                name:"Medium Popcorn",
                price:6
            },


            {
                id:3,
                name:"Coca Cola",
                price:4
            },


            {
                id:4,
                name:"Nachos",
                price:7
            }


        ];


        localStorage.setItem(
            "concessions",
            JSON.stringify(food)
        );


    }



}


// ========================================
// GET DATA FUNCTIONS
// ========================================


function getMovies(){

    return JSON.parse(
        localStorage.getItem("movies")
    ) || [];

}



function getSettings(){

    return JSON.parse(
        localStorage.getItem("settings")
    ) || {};

}



function getBookings(){

    return JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

}




// ========================================
// MOVIE FUNCTIONS
// ========================================


function openMovie(movieName){


    localStorage.setItem(
        "selectedMovie",
        movieName
    );


    window.location.href =
    "booking.html";


}




function displayFeaturedMovies(){


    const container =
    document.querySelector(".movieGrid");


    if(!container)
    return;



    const movies=getMovies();



    container.innerHTML="";



    movies.forEach(movie=>{


        container.innerHTML += `


        <div class="movieCard">


            <img src="${movie.poster}">


            <h3>
            ${movie.name}
            </h3>


            <p>
            ${movie.genre}
            •
            ${movie.runtime}
            </p>


            <button onclick="openMovie('${movie.name}')">

            Book Now

            </button>


        </div>


        `;


    });



}



// ========================================
// NOTIFICATIONS
// ========================================


function notify(message){


    const box=document.createElement(
        "div"
    );


    box.className="notification";


    box.innerHTML=message;



    document.body.appendChild(box);



    setTimeout(()=>{


        box.remove();


    },3000);



}



// ========================================
// ADMIN CHECK
// ========================================


function adminLoggedIn(){


    return sessionStorage.getItem(
        "admin"
    )==="true";


}



function logoutAdmin(){


    sessionStorage.removeItem(
        "admin"
    );


    window.location.href=
    "login.html";


}



// ========================================
// DATE HELPERS
// ========================================


function today(){


    const date=new Date();


    return date.toLocaleDateString();


}



// ========================================
// START APPLICATION
// ========================================


initializeDatabase();



document.addEventListener(
"DOMContentLoaded",
()=>{


    displayFeaturedMovies();


});
