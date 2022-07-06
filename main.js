const cityPicture = document.getElementById("citipix-form");
cityPicture.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.getElementById("city-type").value;
  const newCity = city.trim().toLowerCase();
  document.body.classList = "";
  if (newCity === "new york" || newCity === "nyc") {
    document.body.classList.add("nyc");
  } else if (newCity === "san francisco" || newCity === "sf") {
    document.body.classList.add("sf");
  } else if (newCity === "los angeles" || newCity === "la") {
    document.body.classList.add("la");
  } else if (newCity === "austin" || newCity === "aus") {
    document.body.classList.add("austin");
  } else if (newCity === "sydney" || newCity === "syd") {
    document.body.classList.add("sydney");
  }
  cityFormCapture.reset();
});
