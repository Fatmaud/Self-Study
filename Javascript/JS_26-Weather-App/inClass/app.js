//!Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input");
const cardContainer = document.getElementById("card-container");
const alertMsg = document.getElementById("alert");

//for Finding Location
const locate = document.getElementById("locate");
const userLocationDiv = document.getElementById("userLocation");
let userLocation = false;

// Languages
const langButton = document.querySelector(".language");

//!Variables
const apiKey = `279c353485f18935453fadc67073e40f`;
let url; //api istegi icin kullanilacak
let cities = []; //sehirlerin isimleri tutulacak
let units = "metric"; // default kelvin geliyor; ° a cevirmek icin.fahrenheit icin 'imperial'
let lang = "en"; //Almanca icin 'de' yazilacak

//! Event Listeners:
//form oldugu icin 'click' degil 'submit' olacak:
form.addEventListener("submit", (e) => {
  e.preventDefault(); //form un default özelligi 'submit'; preventDeFault la bu özelligi devredisi biraktik

  if (input.value) {
    const city = input.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`;
    //   console.log(url);

    getWeatherData();
  }

  form.reset(); //formu sifirlar; icini siler
});

//?Finding Location-eventListener

locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    // console.log(coords);

    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${apiKey}`;
    userLocation = true;

    getWeatherData();
  });
});

//? Langauge- eventListener

langButton.addEventListener("click", (e) => {
  //   console.log(e.target.textContent);

  if (e.target.textContent == "DE") {
    input.setAttribute("placeholder", "Suche nach einer Stadt");
  } else if (e.target.textContent == "EN") {
    input.setAttribute("placeholder", "Search for a city");
    lang = "en";
  }
});

//!Functions

const getWeatherData = async () => {
  try {
    // const response = await fetch(url).then((response) => response.json()); //!fetch ile
    const response = await axios(url); //^ axios ile: 3.part library: istek atma-html e link ekleyerek calisir
    // console.log(response); //apiden gelen veri

    //Destructuring:
    // const { name, main, weather, sys } = response; //!fetch
    const { name, main, weather, sys } = response.data; //^ axios

    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    // const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    if (cities.indexOf(name) == -1) {
      cities.unshift(name);

      let card = `       <div class="col" id="${name}">
        <div class="card mb-4 rounded-3 shadow-sm">
            <ul class="list-unstyled mt-2 mb-4">
                <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
                <h4 class="my-0 fw-normal">${name} <span ><sup><img src="https://flagsapi.com/${
        sys.country
      }/shiny/24.png" class="rounded-circle" alt=${
        sys.country
      }/> </sup></span></h4>
                <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${Math.round(
                  main.temp
                )}<sup>°C</sup></h1>
                <h6 class="card-title pricing-card-title">Min : ${Math.round(
                  main.temp_min
                )}<sup>°C</sup> - Max : ${Math.round(
        main.temp_max
      )}<sup>°C</sup>  </h6>
                <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${
                  main.pressure
                } <img src="./assets/wi-humidity.svg" height="30px"/>${
        main.humidity
      } </h6>
                <li><img src="${iconUrl}"/></li>
                <li>${weather[0].description.toUpperCase()}</li>
            </ul>
        </div>
        </div>`;

      if (userLocation) {
        userLocationDiv.innerHTML = card;
        userLocation = false;
      } else {
        cardContainer.innerHTML = card + cardContainer.innerHTML; //sonradan eklenen sehirin basa eklenmesi icin. 'card' i sona eklersek önce yazilan sehir üstte/listenin basinda kalir
      }

      //Remove Cities:
      const singleClearButton = document.querySelectorAll(".bi-x-circle"); //NodeList dönecegi icin Array Methodlarini kullanabiliriz. forEach kullanacagiz.
      singleClearButton.forEach((button) => {
        button.addEventListener("click", (e) => {
          //console.log(e.target.closest(".col").id); //console da yazdigimiz sehri döndürür.

          delete cities[cities.indexOf(e.target.closest(".col").id)]; //arrayden siler. (aradigimiz sehri arrayden silmezsek domdan silsek bile adini tekrar yazinca 'daha önce aradin' diye hata veriyor.)

          e.target.closest(".col").remove(); //DOM'dan siler
        });
      });
    } else {
      if (lang == "de") {
        alertMessage.textContent = `Sie kennen das Wetter für die ${name} bereits. Bitte suchen Sie nach einer anderen Stadt 😉`;
      } else {
        alertMessage.textContent = `You already know the weather for ${name}, Please search for another city 😉`;
      }
      alertMessage.classList.replace("d-none", "d-block"); //html de alert display-none oldugu icin bu degisimi yapmazsak alert görünmez.

      setTimeout(() => {
        alertMessage.classList.replace("d-block", "d-none");
      }, 3000);
    }
  } catch (error) {
    if (lang == "DE") {
      alertMsg.textContent = `Stadt wurde nicht gefunden!`;
    } else {
      alertMsg.textContent = `City is not found!`;
      alertMsg.classList.replace("d-none", "d-block"); //html de alert display-none oldugu icin bu degisimi yapmazsak alert görünmez.
      setTimeout(() => {
        alertMsg.classList.replace("d-block", "d-none");
      }, 3000);
    }
  }
};
