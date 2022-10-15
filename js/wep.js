function work() {
  const force = document.getElementById("forceinput").value;
  const displacement = document.getElementById("displacementinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const work = force * displacement;
  resultdiv1.innerHTML = `Work = ${work.toLocaleString()} J`;
}

function kineticEnergy() {
  const mass = document.getElementById("massinput").value;
  const velocity = document.getElementById("velocityinput").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const ke = (1 / 2) * mass * velocity * velocity;
  resultdiv2.innerHTML = `Kinetic Energy = ${ke.toLocaleString()} J`;
}

function potentialEnergy() {
  const mass = document.getElementById("massinput2").value;
  const gravity = document.getElementById("gravityinput").value;
  const height = document.getElementById("heightinput").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const pe = mass * gravity * height;
  resultdiv3.innerHTML = `Potential Energy = ${pe.toLocaleString()} J`;
}

function power() {
  const work = document.getElementById("workinput2").value;
  const time = document.getElementById("timeinput").value;
  const resultdiv4 = document.getElementById("resultdiv4");
  const power = work / time;
  resultdiv4.innerHTML = `Power = ${power.toLocaleString()} W`;
}
