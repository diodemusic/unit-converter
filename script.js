const conversionFactors = {
    length: { // normalised to meters
        millimeters: 0.001,
        centimeters: 0.01,
        meters: 1,
        kilometers: 1000,
        inches: 0.0254,
        feet: 0.3048,
        yards: 0.9144,
        miles: 1609.34,
    },
    weight: { // normalised to grams
        milligrams: 0.001,
        grams: 1,
        kilograms: 1000,
        ounces: 28.3495,
        pounds: 453.592,
    },
    temperature: {
        celsius: 1,
        fahrenheit: 1,
        kelvin: 1,
    }
};

function convert(value, type, from, to) {
    if (type === "temperature") {
        if (from === "celsius" && to === "fahrenheit") {
            return value * 9 / 5 + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            return (value - 32) * 5 / 9;
        } else if (from === "celsius" && to === "kelvin") {
            return value + 273.15;
        } else if (from === "kelvin" && to === "celsius") {
            return value - 273.15;
        } else if (from === "fahrenheit" && to === "kelvin") {
            return (value - 32) * 5 / 9 + 273.15;
        } else if (from === "kelvin" && to === "fahrenheit") {
            return (value - 273.15) * 9 / 5 + 32;
        } else {
            return value; // If units are the same, return the original value
        }
    } else {
        // Non-temperature conversion
        const normalizedValue = value * conversionFactors[type][from];
        return normalizedValue / conversionFactors[type][to];
    }
}

function convertLength() {
    let form = document.getElementById("convertForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const length = parseFloat(document.getElementById("length").value);
        const from = document.getElementById("unitFrom").value;
        const to = document.getElementById("unitTo").value;

        const convertedLength = convert(length, "length", from, to);
        const convertedLengthString = `${length} ${from} = ${convertedLength} ${to}`

        sessionStorage.setItem("length", convertedLengthString);
        window.location.href = "length_result.html";
    })
};

function convertWeight() {
    let form = document.getElementById("convertForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById("weight").value);
        const from = document.getElementById("unitFrom").value;
        const to = document.getElementById("unitTo").value;

        const convertedWeight = convert(weight, "weight", from, to);
        const convertedWeightString = `${weight} ${from} = ${convertedWeight} ${to}`

        sessionStorage.setItem("weight", convertedWeightString);
        window.location.href = "weight_result.html";
    })
};

function convertTemperature() {
    let form = document.getElementById("convertForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const temperature = parseFloat(document.getElementById("temperature").value);
        const from = document.getElementById("unitFrom").value;
        const to = document.getElementById("unitTo").value;

        const convertedTemperature = convert(temperature, "temperature", from, to);
        const convertedTemperatureString = `${temperature} ${from} = ${convertedTemperature} ${to}`

        sessionStorage.setItem("temperature", convertedTemperatureString);
        window.location.href = "temperature_result.html";
    })
};
