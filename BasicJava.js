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

