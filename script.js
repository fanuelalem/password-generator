 
function pass(){
  var result=''

for( var i=0;i<8;i++){
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=123456789";
  var randomgenerator = Math.floor(Math.random()*73);
  result += characters.charAt(randomgenerator);
 
}
 
document.getElementById("generate").value = result;
}
 

