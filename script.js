document.write("Hello,world")

function sayHello(){
 var response=prompt("What's your name?");
 alert("Hello "+response+" have a good day!");
}
function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(300,500));

function showTopic() {
  var x=document.getElementById('demo');
  x.style.fontSize="25fx";
  x.style.color="red";
}

var movies=["Avengers","Ironman","Spiderman","Caption Marvel","Thor","X man"];
movies[2]="Black Panther";
movies.push("Spiderman");
movies.pop(movies[1]);
console.log(movies);

var movie={
  title:"Caption Marvel",
  time:"2pm"
};
alert(movie.title);
movie.status="available";
console.log(movie)

var fruits=[];
for(i=1;i<10;i++){
  fruits[i]=prompt("Enter a fruit:");
}
alert("fruits contains " + fruits);


var movieDetails = [ {title: "Avengers",   time:"12pm",   status: "available"}, {title: "Captain Marvel",   time:"2pm",   status: "unavailable"}, {title: "Black Panther",   time:"4pm",   status: "available"}, {title: "Spiderman",   time:"6pm",   status: "available"} ];
for (var movie of movieDetails){
   if (movie.status === "available"){
  console.log("The movie " + movie.title + " plays at " + movie.time)}
  else{console.log("Sorry, the movie " + movie.title + " is sold out.") }
};
