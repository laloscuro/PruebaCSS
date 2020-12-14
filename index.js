console.info("Hola mundo");
const x=10;
let aA = "letra a";
let bB = "letra b";
var myTemplate = "Hola holita";
var materials = [
  'impacto',
  'tecnologico',
  'cinco',
  'curso de angular'];
 
 console.info(materials.map(material => material.length));
  //template Strings
 console.info(`Esta es la leta ${ aA } y esta otra es la letra ${ bB } y ${myTemplate}`);
//Asignacion por destructuracion

var o = {p:42,q:true};

var {p,q} = o;
console.log("P",p);
console.log("Q",q);

var {p:foo,q:bar} = o;
console.log("foo",foo);
console.log("bar",bar);

let ranNums = [];
let timeoutID;
function alerta()
{
  alert("hola");
}


function generatingRandomNumber()
{
  let min=1; 
  let max=91;  
  let random = 
    Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log("Numero:",random);
    console.log(ranNums.indexOf(random));
    if(ranNums.indexOf(random)==-1)
    {
      ranNums.push(random);
      //document.write("Random Number Generated : " + random );
      //document.getElementById("numeros").innerHTML+=","+random;
      let audio = new Audio('sounds/Number_1.mp3');
      audio.play();
      let capa=document.createElement("div");
      capa.setAttribute("class","capaNumero");
      capa.innerHTML=random;
      document.getElementById("Grid_Numeros").appendChild(capa);
      //document.getElementById('song').innerHTML = '<audio id="audio-player"  src="" type="audio/mpeg">';
    }
    else
    {
      generatingRandomNumber();
    }
    if(ranNums.length==91)
    {
      stopGenerating();
    }
}

function startGenerating()
{
  timeoutID = window.setInterval(generatingRandomNumber, 2000);
}

function stopGenerating()
{
  window.clearInterval(timeoutID);
  ranNums.splice(0, ranNums.length);
  document.getElementById("Grid_Numeros").innerHTML="";
}

function pauseGenerating()
{
  window.clearInterval(timeoutID);
}


    
 
 