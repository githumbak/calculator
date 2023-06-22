function writeOut(value){
    document.getElementById("clicked1").value+=value
}

function clearr() {
    document.getElementById("clicked1").value = ""
    document.getElementById("clicked2").value = ""
}
function calculation(){

    let x=document.getElementById("clicked1").value
    x = parseFloat(x);
    let divisionSign=document.getElementById("division").value
    let multiplicationSign=document.getElementById("multiplication").value
    let subtractionSign=document.getElementById("subtraction").value
    let additionSign=document.getElementById("addition").value
    
    document.getElementById("clicked1").value=x
    document.getElementById("clicked2").value=x
    
    let result;

  switch(x) {
    case x+divisionSign||divisionSign+x:
        result = parseFloat(x)/parseFloat(x)
    break;
    case x+multiplicationSign||multiplicationSign+x:
        result = parseFloat(x)*parseFloat(x)
    break;
    case x+subtractionSign||subtractionSign+x:
        result = parseFloat(x)-parseFloat(x)
    break;
    case x+additionSign||additionSign+x:
        result = parseFloat(x)+parseFloat(x)
    break;
    default:
        result = parseFloat(x)
  }
  document.getElementById("clicked2").value = result;
  document.getElementById("clicked1").value = "";
}
