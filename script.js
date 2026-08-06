////////////////////////////////////////////////////
// PREMIUM PORTFOLIO JAVASCRIPT
////////////////////////////////////////////////////



// Loader Removal

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);


},1200);


});







// Custom Cursor


const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});



document.querySelectorAll("a,.project-card")
.forEach(item=>{


item.addEventListener("mouseenter",()=>{

cursor.style.transform="scale(2)";

});


item.addEventListener("mouseleave",()=>{

cursor.style.transform="scale(1)";

});


});







// Particle AI Background


const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



let particles=[];


class Particle{


constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.size=Math.random()*3+1;

this.speedX=(Math.random()-0.5);

this.speedY=(Math.random()-0.5);

}


update(){

this.x+=this.speedX;

this.y+=this.speedY;


if(this.x<0||this.x>canvas.width)
this.speedX*=-1;


if(this.y<0||this.y>canvas.height)
this.speedY*=-1;


}



draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);


ctx.fillStyle="#38bdf8";

ctx.fill();

}


}



function createParticles(){


for(let i=0;i<120;i++){

particles.push(new Particle());

}


}


createParticles();




function connectParticles(){


for(let a=0;a<particles.length;a++){


for(let b=a;b<particles.length;b++){


let distance=

Math.sqrt(

Math.pow(
particles[a].x-particles[b].x,
2)

+

Math.pow(
particles[a].y-particles[b].y,
2)

);



if(distance<120){


ctx.beginPath();

ctx.strokeStyle="rgba(56,189,248,0.15)";

ctx.lineWidth=1;

ctx.moveTo(
particles[a].x,
particles[a].y
);


ctx.lineTo(
particles[b].x,
particles[b].y
);


ctx.stroke();



}



}


}



}




function animateParticles(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach(p=>{

p.update();

p.draw();

});


connectParticles();


requestAnimationFrame(
animateParticles
);


}



animateParticles();






window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});








// 3D Project Card Tilt


const cards=document.querySelectorAll(
".project-card"
);



cards.forEach(card=>
