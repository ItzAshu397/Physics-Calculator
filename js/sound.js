function distance() {
  const velocity = document.getElementById("velocityinput").value;
  const time = document.getElementById("timeinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const distance = (velocity * time) / 2;
  resultdiv1.innerHTML = `Distance = ${distance.toLocaleString()} m`;
}

function velocity() {
  const distance = document.getElementById("distanceinput2").value;
  const time = document.getElementById("timeinput2").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const velocity = (2 * distance) / time;
  resultdiv2.innerHTML = `Velocity = ${velocity.toLocaleString()} ms-¹`;
}

function time() {
  const distance = document.getElementById("distanceinput3").value;
  const velocity = document.getElementById("velocityinput2").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const time = (2 * distance) / velocity;
  resultdiv3.innerHTML = `Time Taken = ${time.toLocaleString()} s`;
}
