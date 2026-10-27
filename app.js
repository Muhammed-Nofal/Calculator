 

var input = document.getElementById("input");

function addValue(value) {
    input.value += value;
}

function allClear() {
    input.value = ""
}
function valueClear() {
    var value = input.value;
    input.value = value.slice(0, -1)
}
function calculate() {
    input.value = eval(input.value)
}

function addValue(value) {
    var last = input.value.slice(-1);

    if (last == "+" || last == "-" || last == "*" || last == "/" || last == "%") {
        if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%") {
            return;
        }
    }

    input.value += value;
}