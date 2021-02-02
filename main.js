var x = 0;
var tmp = 0;
var equation = "+";
var upperpole = "";
var mathresult = 0;

function display(a) {
    x = (10 * x) + a;
    document.getElementById("pole").innerHTML = x;
}

function math(a) {
    tmp = x;
    switch (equation) {
        case '/':
            mathresult /= x;
            break;
        case '*':
            mathresult *= x;
            break;
        case '-':
            mathresult -= x;
            break;
        case '+':
            mathresult += x;
            break;
        default:
            document.getElementById("pole").innerHTML = 'ERROR';
    }
    equation = a;
    x = 0;
    if (tmp != 0)
        upperpole = upperpole + tmp + equation;
    else
        upperpole += equation;

    document.getElementById("Eq").innerHTML = upperpole;

}

function resum() {
    var value = parseInt(document.getElementById("pole").value);
    switch (equation) {
        case '/':
            mathresult /= value;
            document.getElementById("pole").innerHTML = mathresult;
            break;
        case '*':
            mathresult *= value;
            document.getElementById("pole").innerHTML = mathresult;
            break;
        case '-':
            mathresult -= value;
            document.getElementById("pole").innerHTML = mathresult;
            break;
        case '+':
            mathresult += value;
            document.getElementById("pole").innerHTML = mathresult;
            break;
        default:
            document.getElementById("pole").innerHTML = 'ERROR';
    }
    tmp = 0;
    x = 0;
    equation = '+';
    document.getElementById("Eq").innerHTML = upperpole + value + '=' + mathresult;
    upperpole = document.getElementById("pole").value;
}

function setzerotooutput() {
    x = 0;
    tmp = 0;
    equation = "+";
    upperpole = "";
    mathresult = 0;
    document.getElementById("pole").innerHTML = 0;
    document.getElementById("Eq").innerHTML = "";
}