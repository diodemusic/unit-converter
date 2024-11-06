const result = document.getElementById("result");
const temperature = sessionStorage.getItem("temperature");

result.innerHTML = temperature;