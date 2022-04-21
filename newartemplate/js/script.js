
var brands = `<form class='search-bar-brand' action="">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<input type="search" placeholder='search on AR-Cart'/>
</form>
<hr>

</div>

<div class="drop-right">

</div>`;



var kitchen = `<ul>
<a href=""><li>Faucets</li></a>
<a href=""><li>Sink</li></a>
<a href=""><li>Handshowers</li></a>
<a href=""><li>Thermostatic Mixets</li></a>
<a href=""><li>Dishwasher</li></a>
</ul>`;
var light = `  <ul>
<a href=""><li>Architectural facade</li></a>
<a href=""><li>Coomercial outdoor</li></a>
<a href=""><li>Consumer light</li></a>
<a href=""><li>Smart Lights</li></a>

</ul>`;
var newarrival= ``;
var decor = ` <ul>
<a href=""><li>Towel</li></a>
<a href=""><li>StainStick</li></a>
<a href=""><li>Flowers</li></a>
</ul>`;
var bathroom = ` <ul>
<a href=""><li>Sanitary ware</li></a>
<a href=""><li>Whirlpool</li></a>
<a href=""><li>Faucets</li></a>
<a href=""><li>Saunas</li></a>
<a href=""><li>Showers</li></a>
<a href=""><li>Shower Panels</li></a>
<a href=""><li>Thermostatic mixers</li></a>
<a href=""><li>BathTubes</li></a>
<a href=""><li>Flushing system</li></a>
<a href=""><li>Water Heaters</li></a>
<a href=""><li>Spas</li></a>
<a href=""><li>Steam Solutions</li></a>
<a href=""><li>Accessories</li></a>
</ul>`;

document.querySelector(".dropdown").addEventListener("mouseleave", ()=>{
$(".dropdown").css("visibility", "hidden")
$(".dropdown").css("height", "0")
$(".dropdown").css("width", "0%")

})


$("#bathroom").hover(function(){
$(".dropdown").css("visibility", "visible")
$(".dropdown").css("height", "65vh")
$(".dropdown").css("width", "15%")
document.querySelector("#drop").innerHTML = bathroom ;
})


$("#newarrival").hover(function(){
$(".dropdown").css("visibility", "visible")
$(".dropdown").css("height", "65vh")
$(".dropdown").css("width", "15%")
document.querySelector("#drop").innerHTML = newarrival ;

})



$("#kitchen").hover(function(){
$(".dropdown").css("visibility", "visible")
$(".dropdown").css("height", "30vh")
$(".dropdown").css("width", "15%")
document.querySelector("#drop").innerHTML = kitchen;


})



$("#light").hover(function(){
$(".dropdown").css("visibility", "visible")
$(".dropdown").css("height", "24vh")
$(".dropdown").css("width", "15%")
document.querySelector("#drop").innerHTML = light;

})


$("#decor").hover(function(){
$(".dropdown").css("visibility", "visible")
$(".dropdown").css("height", "20vh")
$(".dropdown").css("width", "10%")
document.querySelector("#drop").innerHTML =decor ;
})

