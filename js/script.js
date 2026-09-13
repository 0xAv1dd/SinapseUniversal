
function changeTitle() {
  const title = document.querySelector("h1");


  title.textContent = "Ride the Sinapse";

  setTimeout(function () {
    title.textContent = "Sinapse Universal";
  }, 5000);
}
