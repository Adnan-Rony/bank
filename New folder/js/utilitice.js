function getInputFieldValueById(inputFieldId)
{
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue
}

function getTextElementById(element){
    const textElement=document.getElementById(element);
    const textElementString=textElement.innerText;
    const textElementValue=parseFloat(textElementString);
    return textElementValue;


}

function setTextElementvalueById(element,newValue){
    const textElement=document.getElementById(element);
    textElement.innerText=newValue;

} 