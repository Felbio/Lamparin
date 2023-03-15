const turnOnOff =  document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');


function isLampBroken(){
  return lamp.src.indexOf('lampQueb') > -1;
}

function lampOn(){
  if(!isLampBroken()){
  turn = document.se 
  lamp.src = './img/lampAces.jpg';
  }
}

function lampOff(){
  if(!isLampBroken()){
  lamp.src = './img/lampApag.jpg';
  }
}

function lampBroken(){
  lamp.src = './img/lampQueb.jpg'
}

function lampOnOff(){
  
  if(turnOnOff.textContent == 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  }
  else
  {
    lampOff();
    turnOnOff.textContent = 'Ligar';  
  }
  }

turnOnOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
