var elForm= document.querySelector(".form");
var elInput= document.querySelector(".form-control");
var elResult= document.querySelector(".result");
var elArray=[];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    

    elArray.push(elInput.value);

    elResult.textContent= elArray;

    elInput.value="";
})