var header = document.getElementById("header");
var uaz = document.getElementById("UAZ");
var glider = document.getElementById("GLIDER");
var buggy = document.getElementById("BUGGY");
var bike = document.getElementById("BIKE");
var brdm = document.getElementById("BRDM");
var dacia = document.getElementById("DACIA");
var ship = document.getElementById("SHIP");

var model = document.getElementById("model");
var mph = document.getElementById("mph");
var speed = document.getElementById("speed");
var range = document.getElementById("range");


uaz.onclick = function () {
  header.style.backgroundImage =
    "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-uaz.png)";
  model.innerHTML = "UAZ";
  mph.innerHTML = "3.2s";
  speed.innerHTML = "120 mph";
  range.innerHTML = "250 mi";
};

glider.onclick = function () {
  header.style.backgroundImage =
    "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-motorglider.png)";
  model.innerHTML = "Glider";
  mph.innerHTML = "4.5s";
  speed.innerHTML = "120 mph";
  range.innerHTML = "149 mi";
};

buggy.onclick = function () {
  header.style.backgroundImage =
    "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-buggy.png)";
  model.innerHTML = "Buggy";
  mph.innerHTML = "5.0s";
  speed.innerHTML = "100 mph";
  range.innerHTML = "200 mi";
};

bike.onclick = function () {
  header.style.backgroundImage =
    "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-motorbike.png)";
  model.innerHTML = "Bike";
  mph.innerHTML = "1.8s";
  speed.innerHTML = "180 mph";
  range.innerHTML = "150 mi";
};

brdm.onclick = function () {
  header.style.backgroundImage =
    "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-brdm.png)";
  model.innerHTML = "Brdm";
  mph.innerHTML = "8.2s";
  speed.innerHTML = "63 mph";
  range.innerHTML = "108 mi";
};

dacia.onclick = function () {
    header.style.backgroundImage =
      "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-dacia.png)";
    model.innerHTML = "DACIA";
    mph.innerHTML = "2.7s";
    speed.innerHTML = "140 mph";
    range.innerHTML = "250 mi";
  };

ship.onclick = function () {
  header.style.backgroundImage =
    "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-air_boat.png)";
  model.innerHTML = "Ship";
  mph.innerHTML = "N/A";
  speed.innerHTML = "40 mph";
  range.innerHTML = "2000 mi";
};
