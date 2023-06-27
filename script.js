function writeOut(value){ // funkcja wypisywania
    document.getElementById("clicked1").value+=value
}

var first=0
var second=0
var firstOperation

function writeOutSign1(value){ 
    if(first==0){
        first=document.getElementById("clicked1").value
        firstOperation="/"
        document.getElementById("clicked1").value+=value
    }
    else{
        second=document.getElementById("clicked1").value
        document.getElementById("clicked1").value+=value
    }
}

function writeOutSign2(value){ 
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

function writeOutSign3(value){ 
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

function writeOutSign4(value){ 
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

    var x=document.getElementById("clicked1").value
    var divisionSign=document.getElementById("division").value // dzielenie
    var multiplicationSign=document.getElementById("multiplication").value // mnożenie
    var subtractionSign=document.getElementById("subtraction").value // odejmowanie
    var additionSign=document.getElementById("addition").value // dodawanie
    
    var result;
    

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
