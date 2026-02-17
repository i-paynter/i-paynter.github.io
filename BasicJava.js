function tickUp() {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}
function tickDown() {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) - 1;
}
function runForLoop() {
    const counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 0; i <= counterValue; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    const counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 1; i <= counterValue; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
    const counterValue = parseInt(document.getElementById("counter").textContent);
    let multiples = [];

    for (let i = counterValue; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }

    console.log(multiples);
}

function printCarObject() {
    const car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(carNumber) {
    let car;

    if (carNumber === 1) {
        car = carObject1;
    } else if (carNumber === 2) {
        car = carObject2;
    } else if (carNumber === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber) {
    const paragraph = document.getElementById("styleParagraph");

    if (colorNumber === 1) {
        paragraph.style.color = "red";
    } else if (colorNumber === 2) {
        paragraph.style.color = "green";
    } else if (colorNumber === 3) {
        paragraph.style.color = "blue";
    }
}
