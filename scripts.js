        const apiKey = "3ae1f8eccc81ba3b9e1bba103aa12fe7";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const search = document.querySelector(".search input");
        const btn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if (!response.ok) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                return;
            }else{
                let data = await response.json();
                console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "Image/clouds.png";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "Image/rain.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "Image/clear.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "Image/drizzle.png";
            } else if (data.weather[0].main === "Snow") {
                weatherIcon.src = "Image/snow.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
        }

        btn.addEventListener("click", ()=> {
            checkWeather(search.value);
        });