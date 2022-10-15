function momentOfForce() {
  const force = document.getElementById("forceinput").value;
  const length = document.getElementById("lengthinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const mof = force * length;
  resultdiv1.innerHTML = `Moment of Force = ${mof.toLocaleString()} Nm`;
}

function force() {
  const momentofforce = document.getElementById("momentofforceinput").value;
  const length = document.getElementById("lengthinput2").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const force = momentofforce / length;
  resultdiv2.innerHTML = `Force = ${force.toLocaleString()} N`;
}

function length() {
  const momentofforce = document.getElementById("momentofforceinput2").value;
  const force = document.getElementById("forceinput2").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const length = momentofforce / force;
  resultdiv3.innerHTML = `Length = ${length.toLocaleString()} m`;
}
