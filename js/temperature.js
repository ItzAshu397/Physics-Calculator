function celsiusToFahrenheit() {
  const celsius = document.getElementById("ctofinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const conversion = (celsius * 9) / 5 + 32;
  resultdiv1.innerHTML = `${celsius}° Celsius = ${conversion}° Fahrenheit`;
}

function celsiusToKelvin() {
  const celsius = document.getElementById("ctokinput").value;
  const conversion = celsius * 1 + 273.15;
  const resultdiv2 = document.getElementById("resultdiv2");
  resultdiv2.innerHTML = `${celsius}° Celsius = ${conversion} Kelvin`;
}

function fahrenheitToCelsius() {
  const fahrenheit = document.getElementById("ftocinput").value;
  const conversion = (((fahrenheit * 1 - 32) * 5) / 9) * 1;
  const resultdiv3 = document.getElementById("resultdiv3");
  resultdiv3.innerHTML = `${fahrenheit}° Fahrenheit = ${conversion}° Celsius`;
}

function fahrenheitToKelvin() {
  const fahrenheit = document.getElementById("ftokinput").value;
  const conversion = (((fahrenheit * 1 - 32) * 5) / 9) * 1 + 273.15;
  const resultdiv4 = document.getElementById("resultdiv4");
  resultdiv4.innerHTML = `${fahrenheit}° Fahrenheit = ${conversion} Kelvin`;
}

function kelvinToCelsius() {
  const kelvin = document.getElementById("ktocinput").value;
  const conversion = kelvin * 1 - 273.15;
  const resultdiv5 = document.getElementById("resultdiv5");
  resultdiv5.innerHTML = `${kelvin} Kelvin = ${conversion}° Celcius`;
}

function kelvinToFahrenheit() {
  const kelvin = document.getElementById("ktofinput").value;
  const conversion = (((kelvin * 1 - 273.15) * 9) / 5) * 1 + 32;
  const resultdiv6 = document.getElementById("resultdiv6");
  resultdiv6.innerHTML = `${kelvin} Kelvin = ${conversion}° Fahrenheit`;
}
