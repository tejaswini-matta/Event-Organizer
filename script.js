function bookEvent(eventName){

localStorage.setItem("event",eventName);

window.location.href="booking.html";

}



function submitBooking(){


let name=document.getElementById("name").value;

let email=document.getElementById("email").value;


if(name=="" || email=="")
{

alert("Please fill all details");

return false;

}


alert("Booking Successful for "+name);


return false;


}