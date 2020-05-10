document.getElementById('lbsInput').addEventListener('input',function(e){
let pounds=e.target.value;
//console.log(pounds);
document.getElementById('GramsOutput').innerHTML=pounds/.0022046;
document.getElementById('KilogramssOutput').innerHTML=pounds/2.2046;

})