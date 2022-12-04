function specificHeat() {
  const energy = document.getElementById("energyinput1").value;
  const mass = document.getElementById("massinput1").value;
  const temperature = document.getElementById("tempinput1").value;
  const resultdiv = document.getElementById("resultdiv1");

  const heat = energy / (mass * temperature);

  resultdiv.innerHTML = `Specific Heat Capacity = ${heat.toLocaleString()} J kg⁻¹ K⁻¹`;
}

function heat() {
  const energy = document.getElementById("energyinput2").value;
  const temperature = document.getElementById("tempinput2").value;
  const resultdiv = document.getElementById("resultdiv2");

  const heat = energy / temperature;

  resultdiv.innerHTML = `Heat Capacity = ${heat.toLocaleString()} J K⁻¹`;
}

function heatEnergy() {
  const mass = document.getElementById("massinput2").value;
  const specificheat = document.getElementById("shinput1").value;
  const temperature = document.getElementById("tempinput3").value;
  const resultdiv = document.getElementById("resultdiv3");

  const energy = mass * specificheat * temperature;

  resultdiv.innerHTML = `Heat Energy = ${energy.toLocaleString()} J`;
}
