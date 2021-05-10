
var btnTranslate = document.querySelector("#btn-translate")
var txtInput =document.querySelector("#txt-input")

var outPutDiv =document.querySelector("#output")



function clickEventhandler()
{
 
   outPutDiv.innerText = "Transalted : baabaanananan " + txtInput.value
}

btnTranslate.addEventListener("click", clickEventhandler)



