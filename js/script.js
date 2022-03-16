const btnJoke = document.querySelector(".btn-joke");
const pJoke = document.querySelector(".p-joke");

const createJoke = async () => {
  const res = await getData();
  console.log(res);
  pJoke.textContent = `${res}`;
};
const getData = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch (error) {
    console.error(error);
  }
};
btnJoke.addEventListener("click", alert('Please turn off your VPN'));
btnJoke.addEventListener("click", createJoke);

// right click
const contextMenu = document.querySelector(".context-menu");

document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (contextMenu.classList.contains("display-none")) {
    contextMenu.style.display = "block";
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
  } else {
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
  }
});

document.body.addEventListener("click", () => {
  contextMenu.style.display = "none";
});

// weather
let weather = {
  apiKey: "81c34be7f0ea904f85507d2cea19abb9",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather : function(data){
    const {name} = data ;
    const {icon,description} = data.weather[0];
    const {temp,humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed);

  }
};
weather.fetchWeather("denver");



