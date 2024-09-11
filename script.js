function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function appendFunction(func) {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = func + '(' + current + ')';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid Expression');
    }
}
