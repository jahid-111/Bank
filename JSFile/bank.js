console.log('hello From Bank Js');


// FROM INPUT TAG-- STRING TO NUMBER 
function inputValue(Values){
    const inputString=document.getElementById(Values);
    const inputValueString=inputString.value;
    const inputValue=parseFloat(inputValueString);
    inputString.value="";
    return inputValue;
}
// inputValue('dps-amount')


// FROM ELEMENT -- STRING TO NUMBER 
function elementValue(Value){

    const getElement=document.getElementById(Value);
    const elementString=getElement.innerText;
    const elementValue=parseFloat(elementString);
    return elementValue;
}
// elementValue();


function resultToDisplay(elementID,newValue){
    const texElement=document.getElementById(elementID);
    texElement.innerText=newValue;
}


document.getElementById('dps-btn').addEventListener('click', function(){

    const dpsValue=inputValue('dps-amount');
    const dpstotal=elementValue('dps-total');
    const subtotalDps=dpsValue+dpstotal;

    resultToDisplay('dps-total', subtotalDps);
    
    const PreviousBalance=elementValue('prv-blnc')
    const DpsSumPrv=PreviousBalance+dpsValue;

    resultToDisplay('prv-blnc', DpsSumPrv)

    console.log(DpsSumPrv) 
})


