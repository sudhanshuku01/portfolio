import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const canvasRef = useRef(null)
    const ParticleArray=[];
    const  mouse={
        x:0,
        y:0
     }
    
class Particle{
        constructor(hue){
            this.x=mouse.x;
            this.y=mouse.y;
            this.size=Math.random()*10;
            this.speedX=Math.random()*10-5;
            this.speedY=Math.random()*10-5;
            this.color='hsl('+hue+',100%,50%)';
        }
        update(){
            this.x+=this.speedX;
            this.y+=this.speedY;
            if(this.size>0.2) this.size-=0.2;
        }
        draw(ctx){
            ctx.fillStyle=this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
            ctx.fill();
        }
    }

  function handleParticles(ctx){
    for(let i=0;i<ParticleArray.length;i++){
        ParticleArray[i].update();
        ParticleArray[i].draw(ctx);
        if(ParticleArray[i].size<=0.3){
            ParticleArray.splice(i,1);
            i--;
        }
    }
 }
  
  useEffect(() => {
    let hue=100;
    const canvas = canvasRef.current 
    const ctx=canvas.getContext('2d');

    canvas.style.width ='100%';
    canvas.style.height='100%';

    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.addEventListener('mousedown',function(event){
        mouse.x=event.x;
        mouse.y=event.y+window.scrollY;
        for(let i=0;i<50;i++){
              ParticleArray.push(new Particle(hue));
          }
      })
    canvas.addEventListener('mousemove',function(event){
        mouse.x=event.x;
        mouse.y=event.y+window.scrollY;
        for(let i=0;i<5;i++){
              ParticleArray.push(new Particle(hue));
          }
      })
    
    let animationFrameId

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleParticles(ctx);
        hue+=2;
        animationFrameId=requestAnimationFrame(animate)
     }
     animate()
     
     return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
    // eslint-disable-next-line
  },[ParticleArray]) 
  
  return <canvas className='canvas' ref={canvasRef} {...props}/>
}

export default Canvas