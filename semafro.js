const img = document.getElementById('img');
const buttonss = document.getElementById('buttons');
let  colorIndex = 0;

const trafficLight = (event) => {
    turnOn[event.target.id]();
}
const nextindex = () => {
    if(colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
    
}
const changeColor = () => {
    const colores = ['red', 'yellow', 'green']
    const color = colores[colorIndex];
    turnOn[color]();
    nextindex();
}
const turnOn = {
    'red':  () => img.src = 'img/vermelho.jpeg',
    'yellow':  () => img.src = 'img/amarelo.jpeg',
    'green':  () => img.src = 'img/verde.jpeg',
    'automatic': () => setInterval(changeColor, 2000)
    //'automatic': () => img.src = ['red', 'yellow','green']//
}
const turnOfTrafic = {
    'stop': () => img.src = 'img/download (2).jpeg',
}
buttonss.addEventListener('click', trafficLight);