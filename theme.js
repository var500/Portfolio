const moonImage = document.querySelector("#moon");

moonImage.addEventListener("click", function () {
  const currentSrc = moonImage.getAttribute("src");
  console.log({currentSrc});
  if (currentSrc === "./img/moon.png") {
    moonImage.src = "./img/sun.png";
    moonImage.classList.remove("w-6");
    moonImage.classList.add("w-8");
  } 
  else if (currentSrc === "./img/sun.png") {
    moonImage.src = "./img/moon.png";
    moonImage.classList.add("w-6");
    moonImage.classList.remove("w-8");
  }
  else {
    moonImage.src = "./img/moon.png";
  }
});
