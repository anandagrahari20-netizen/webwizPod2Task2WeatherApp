function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let myapiKey = "3b209cb6e4a0bc6ecc554d1b727d720d";  

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + city + "&appid=" + myapiKey + "&units=metric";

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        
        if (data.cod == "404") {
            document.getElementById("errorMsg").classList.remove("hidden");
            document.getElementById("weatherBox").classList.add("hidden");
        } 
        else {
            document.getElementById("errorMsg").classList.add("hidden");
            document.getElementById("weatherBox").classList.remove("hidden");

            document.getElementById("cityName").innerText = "City: " + data.name;
            document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
            document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;
            document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " km/h";
        }

    })
    .catch(function(error) {
        document.getElementById("errorMsg").classList.remove("hidden");
        document.getElementById("weatherBox").classList.add("hidden");
    });
}