function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle('light');

}





const deg=6;
const hr= document.querySelector('#hr');
const mn= document.querySelector('#mn');
const sc= document.querySelector('#sc');

setInterval(() => { 
    let d=new Date();
    let hh= d.getHours() * 30;
    let mm= d.getMinutes() * deg;
    let ss= d.getSeconds() * deg;
    
    // let hrotation=30*hh+mn/2;
    // let mrotation=6*mn;
    // let srotation=6*sc;
    
   hr.style.transform = `rotatez(${(hh)+(mm/12)}deg)`;
   mn.style.transform = `rotateZ(${mm}deg)`;
   sc.style.transform = `rotateZ(${ss}deg)`;
   
},1000);