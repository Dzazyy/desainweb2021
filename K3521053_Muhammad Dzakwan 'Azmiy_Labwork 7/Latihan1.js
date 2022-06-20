function getValue() {
    let a = document.querySelector('#number1').value;
    let b = document.querySelector('#number2').value;
    if (a == '') {
        a = 0;
    } else if (b == '') {
        b = 0;
    }
    return [a, b];
}

const sum = () => {
    let values = getValue();
    let x = (parseFloat(values[0]) + parseFloat(values[1]));
    if (x !== x) {
        console.log('0');
        document.getElementById('result').value = 0;
    } else {
        console.log(x);
        document.getElementById('result').value = x;
    }
}

const minus = () => {
    let values = getValue();
    let x = (parseFloat(values[0]) - parseFloat(values[1]));
    if (x !== x) {
        console.log('0');
        document.getElementById('result').value = 0;
    } else {
        console.log(x);
        document.getElementById('result').value = x;
    }
}

const multiple = () => {
    let values = getValue();
    let x = (parseFloat(values[0]) * parseFloat(values[1]));
    if (x !== x) {
        console.log('0');
        document.getElementById('result').value = 0;
    } else {
        console.log(x);
        document.getElementById('result').value = x;
    }
}

const divide = () => {
    let values = getValue();
    let x = (parseFloat(values[0]) / parseFloat(values[1]));
    if (parseFloat(values[1]) == 0 || values[1] == '') {
        document.getElementById('result').value = '~';
    } else {
        if (x !== x) {
            document.getElementById('result').value = 0;
        } else {

            console.log(x);
            document.getElementById('result').value = x;
        }
    }
}

function reset() {
    console.clear();
}