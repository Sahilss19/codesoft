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
var info = document.querySelector('.info'); 
function changeVehicleInfo(vehicle, bgImage, modelName, mphTime, vehicleSpeed, vehicleRange) {
   
    header.style.backgroundImage = bgImage;
    
    model.innerHTML = modelName;
    mph.innerHTML = mphTime;
    speed.innerHTML = vehicleSpeed;
    range.innerHTML = vehicleRange;
    
    info.classList.add("fadeIn");
    
    setTimeout(() => {
        info.classList.remove("fadeIn");
    }, 1000);
}

uaz.onclick = function () {
    changeVehicleInfo(
        "UAZ",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-uaz.png)",
        "UAZ", "3.2s", "120 mph", "250 mi"
    );
};

glider.onclick = function () {
    changeVehicleInfo(
        "Glider",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-motorglider.png)",
        "Glider", "4.5s", "120 mph", "149 mi"
    );
};

buggy.onclick = function () {
    changeVehicleInfo(
        "Buggy",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-buggy.png)",
        "Buggy", "5.0s", "100 mph", "200 mi"
    );
};

bike.onclick = function () {
    changeVehicleInfo(
        "Bike",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-motorbike.png)",
        "Bike", "1.8s", "180 mph", "150 mi"
    );
};

brdm.onclick = function () {
    changeVehicleInfo(
        "BRDM",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-brdm.png)",
        "BRDM", "8.2s", "63 mph", "108 mi"
    );
};

dacia.onclick = function () {
    changeVehicleInfo(
        "DACIA",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-dacia.png)",
        "DACIA", "2.7s", "140 mph", "250 mi"
    );
};

ship.onclick = function () {
    changeVehicleInfo(
        "Ship",
        "url(https://wstatic-prod.pubg.com/web/live/static/game-info/vehicles/images/viewer/img-vehicles-air_boat.png)",
        "Ship", "N/A", "40 mph", "2000 mi"
    );
};
