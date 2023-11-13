var d 
var result 

function ab(){

var a = parseInt(document.getElementById("in_a").value)
var b = parseInt(document.getElementById("in_b").value)

var d = parseInt(document.getElementById("in_d").value) 
switch (d){
    case '+':
    result = a + b;
    break;   
    case '-':
    result = a - b;
    break;   
    case '*':
    result = a * b;
    break;   
    case '/':
    result = a / b;
    break;   

}
alert (result);
}