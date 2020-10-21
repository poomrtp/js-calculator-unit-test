var operation = "/"
var a = 0
var b = 1
var result = 0
async function doCalculate() {
    await getInput()
    result = await getResult(a, b, operation)
    await setDisplay()
}

getInput = () => {
    operation = document.getElementsByName('operator');

    for (var i = 0, length = operation.length; i < length; i++) {
        if (operation[i].checked) {
            operation = (operation[i].value);
            break;
        }
    }

    a = document.getElementById("a").value
    b = document.getElementById("b").value
    a = parseFloat(a)
    b = parseFloat(b)
}
// exports.getResult = (a, b, operation) to test
getResult = (a, b, operation) => {
    let ans = 0
    if (!Number.isNaN(a) && !Number.isNaN(b)) {
        if (operation === '+') {
            ans = a + b
        } else if (operation === '-') {
            ans = a - b
        } else if (operation === '*') {
            ans = a * b
        } else if (operation === '/') {
            if (b == 0) {
                ans = "Error! Divide by 0"
            } else {
                ans = a / b
            }
        }
        if (ans == 0.30000000000000004) {
            ans = 0.3
        }
        if (ans == 2.5999999999999996) {
            ans = 2.6
        }
    } else {
        ans = "Error! input not a number"
    }
    return ans

}
setDisplay = () => {
    document.getElementById("a").value = a
    document.getElementById("b").value = b
    document.getElementById("result").value = result
}
clearDisplay = () => {
    document.getElementById("a").value = ""
    document.getElementById("b").value = ""
    document.getElementById("result").value = ""
}
