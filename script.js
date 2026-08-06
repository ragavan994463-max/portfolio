// ===============================
// LOADER
// ===============================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");


setTimeout(()=>{

loader.style.opacity="0";


setTimeout(()=>{

loader.style.display="none";

},600);


},1200);


});




// ===============================
// CUSTOM CURSOR
// ===============================


const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});



document.querySelectorAll("a,.project-card")
.forEach(element=>{


element.addEventListener("mouseenter",()=>{

cursor.style.transform="scale(2)";

});


element.addEventListener("mouseleave",()=>{

cursor.style.transform="scale(1)";

});


});







// ===============================
// AI PARTICLE NETWORK
// ===============================


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



if(this.x<0 || this.x>canvas.width){

this.speedX*=-1;

}


if(this.y<0 || this.y>canvas.height){

this.speedY*=-1;

}


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




for(let i=0;i<120;i++){

particles.push(new Particle());

}





function connect(){


for(let a=0;a<particles.length;a++){


for(let b=a;b<particles.length;b++){


let distance=Math.sqrt(

(particles[a].x-particles[b].x)**2+

(particles[a].y-particles[b].y)**2

);



if(distance<120){


ctx.beginPath();


ctx.strokeStyle=
"rgba(56,189,248,0.15)";


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






function animate(){


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



connect();


requestAnimationFrame(animate);


}



animate();





window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});







// ===============================
// PROJECT 3D TILT
// ===============================


document.querySelectorAll(".project-card")
.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let box=card.getBoundingClientRect();


let x=e.clientX-box.left;

let y=e.clientY-box.top;



let rotateX=
(y-box.height/2)/15*-1;


let rotateY=
(x-box.width/2)/15;



card.style.transform=
`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-15px)
`;


});



card.addEventListener("mouseleave",()=>{


card.style.transform="";


});


});







// ===============================
// SCROLL REVEAL
// ===============================



const elements=document.querySelectorAll(
"section,.project-card,.timeline-item,.glass-box"
);



const observer=new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},

{
threshold:0.15
}


);





elements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(40px)";


element.style.transition=
"0.8s ease";



observer.observe(element);


});







// ===============================
// SMOOTH NAVIGATION
// ===============================


document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",(e)=>{


e.preventDefault();



document.querySelector(
link.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});


});
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
