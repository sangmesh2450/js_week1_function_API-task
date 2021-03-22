var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  //console.log(data);
  for (let ele of data) {
    var countryName = ele.name;
    var latlng = ele.latlng;
    // console.log(countryName,latlng);
    getWheatherDetails(countryName, latlng[0], latlng[1]);
  }
};

function getWheatherDetails(country, lat, long) {
  var weatherRequest = new XMLHttpRequest();

  weatherRequest.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6cd64a4bd5895d0bfaca48703cc76c8f`,
    true
  );
  weatherRequest.send();
  weatherRequest.onload = function () {
    var data = JSON.parse(this.response);
    console.log(country,data.main.temp);
  };
}
