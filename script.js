function writeOut(value){ // funkcja wypisywania
    document.getElementById("clicked1").value+=value
}

let first=0
let second=0
let firstOperation

function writeOutSign(value){ 
    if(first==0){
        first=document.getElementById("clicked1").value
        firstOperation
        document.getElementById("clicked1").value+=value
    }
    else{
        second=document.getElementById("clicked1").value
        document.getElementById("clicked1").value+=value
    }
}

function writeOutSign(value){ 
    if(first==0){
        first=document.getElementById("clicked1").value
        firstOperation
        document.getElementById("clicked1").value+=value
    }
    else{
        second=document.getElementById("clicked1").value
        document.getElementById("clicked1").value+=value
    }
}

function writeOutSign(value){ 
    if(first==0){
        first=document.getElementById("clicked1").value
        firstOperation
        document.getElementById("clicked1").value+=value
    }
    else{
        second=document.getElementById("clicked1").value
        document.getElementById("clicked1").value+=value
    }
}

function writeOutSign(value){ 
    if(first==0){
        first=document.getElementById("clicked1").value
        firstOperation
        document.getElementById("clicked1").value+=value
    }
    else{
        second=document.getElementById("clicked1").value
        document.getElementById("clicked1").value+=value
    }
}


function clearr() { // funkcja czyszczenia
    document.getElementById("clicked1").value = ""
    document.getElementById("clicked2").value = ""
    first=0;
}
function calculation(){

    let x=document.getElementById("clicked1").value
    let divisionSign=document.getElementById("division").value // dzielenie
    let multiplicationSign=document.getElementById("multiplication").value // mnożenie
    let subtractionSign=document.getElementById("subtraction").value // odejmowanie
    let additionSign=document.getElementById("addition").value // dodawanie
    
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
        result = first
  }
  
  document.getElementById("clicked1").value = "";
  document.getElementById("clicked2").value = result;
}
