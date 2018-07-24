module.exports = function (carRegNum){
if(carRegNum.startsWith("CY")){
return "Bellville";
}else if(carRegNum.startsWith("CJ")){
return "Paarl";
}else if(carRegNum.startsWith("CA")){
return "Cape Town";
}else{
return "Some other place!"
}
}
