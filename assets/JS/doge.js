// document.getElementById ("doge")= define that i'm going to look in html file for an element with the ID "doge";
// addEventListener which event is needed( mouseover) and what will happen (woof,woof); 
document.getElementById("doge").addEventListener("mouseover", woofwoof);
document.getElementById("doge").addEventListener("mouseout", woof);

// define the function ^ from mouseover so it knows when we hoover on it woof woof will appear
function woofwoof() {
  document.getElementById("doge").innerHTML = "woof woof!";
}

function woof() {
  document.getElementById("doge").innerHTML = "woof!";
}


function loadPage() {
  document.getElementById("doge").innerHTML = "woof";
}

// var button = document.getElementById("pictureOfDoge");

function myPic() {
  document.getElementById("pictureOfDoge").classList.toggle("hidden");
}

// button.onclick = function(){
//     dog.classList.toggle("clicked");
// };

