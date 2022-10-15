function current() {
  const charge = document.getElementById("chargeinput").value;
  const time = document.getElementById("timeinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const current = charge / time;
  resultdiv1.innerHTML = `Current = ${current.toLocaleString()} A`;
}

function potential() {
  const work = document.getElementById("workinput").value;
  const charge = document.getElementById("chargeinput2").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const potential = work / charge;
  resultdiv2.innerHTML = `Potential = ${potential.toLocaleString()} V`;
}

function voltage() {
  const current = document.getElementById("currentinput2").value;
  const resistance = document.getElementById("resistanceinput").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const voltage = current * resistance;
  resultdiv3.innerHTML = `Voltage = ${voltage.toLocaleString()} V`;
}

function power() {
  const voltage = document.getElementById("voltageinput2").value;
  const current = document.getElementById("currentinput3").value;
  const resultdiv4 = document.getElementById("resultdiv4");
  const power = voltage * current;
  resultdiv4.innerHTML = `Power = ${power.toLocaleString()} W`;
}

function power2() {
  const current = document.getElementById("currentinput4").value;
  const resistance = document.getElementById("resistanceinput2").value;
  const resultdiv5 = document.getElementById("resultdiv5");
  const power = current * current * resistance;
  resultdiv5.innerHTML = `Power = ${power.toLocaleString()} W`;
}

function power3() {
  const voltage = document.getElementById("voltageinput3").value;
  const resistance = document.getElementById("resistanceinput3").value;
  const resultdiv6 = document.getElementById("resultdiv6");
  const power = (voltage * voltage) / resistance;
  resultdiv6.innerHTML = `Power = ${power.toLocaleString()} W`;
}

function heat() {
  const current = document.getElementById("currentinput5").value;
  const resistance = document.getElementById("resistanceinput4").value;
  const time = document.getElementById("timeinput2").value;
  const resultdiv7 = document.getElementById("resultdiv7");
  const heat = current * current * resistance * time;
  resultdiv7.innerHTML = `Heat = ${heat.toLocaleString()} J`;
}
