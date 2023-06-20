import React, { useEffect, useState ,useRef } from 'react'
import './circlesFight.css'

export default function CirclesFight() {
    const canvasRef = useRef();// document.querySelector('canvas');
    const [c,setC]= useState();

    useEffect(()=>{
        if (canvasRef) {
            setC(canvasRef.current.getContext('2d'));
            }
    },[canvasRef]);


    class Player {
        constructor(x,y,radius,color){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color  = color
        };
        draw(){
            if (!c) {return;}
            c.beginPath();
            c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            c.fillStyle = this.color;
            c.fill();
        }
    }

    class Projectile {
        constructor(x,y,radius,color,velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color  = color;
            this.velocity = velocity;
        };
        draw(){
            if (!c) {return;}
            c.beginPath();
            c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            c.fillStyle = this.color;
            c.fill();
        };
        update(){
            this.draw();
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y; 
        }
    }

    class Enemy {
        constructor(x,y,radius,color,velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color  = color;
            this.velocity = velocity;
        };
        draw(){
            if (!c) {return;}
            c.beginPath();
            c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            c.fillStyle = this.color;
            c.fill();
        };
        update(){
            this.draw();
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y; 
        }
    }

    

    const player = new Player(innerWidth / 2,innerHeight / 2,30,'blue');
    const projectiles = [];
    const enemies = [];

    function spawEnemies(){
        setInterval(()=>{
            const radius = Math.random() * (30 - 5) + 5;
            let x;
            let y;
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius : innerWidth + radius;
                y = Math.random() * innerHeight;
            } else {
                x = Math.random() * innerWidth;
                y = Math.random() < 0.5 ? 0 - radius : innerHeight + radius;
            }

            const color = 'green';

            const angle = Math.atan2(
                innerHeight / 2 - y,
                innerWidth / 2 - x);
            const velocity = {
                x:Math.cos(angle),
                y:Math.sin(angle)
            }
            enemies.push(new Enemy(x,y,radius,color,velocity));

        },1000);
    }

    
    let animationId ;
    function animate(){
        animationId = requestAnimationFrame(animate);
        if (!c) {
            return
        }
        c.clearRect(0,0,innerWidth,innerHeight);
        player.draw();
        projectiles.forEach((projectile)=>{
            projectile.update();
        });

        enemies.forEach((enemy,index)=>{
            enemy.update();
            const dist = Math.hypot(player.x - enemy.x,player.y - enemy.y);
            if (dist -  enemy.radius - player.radius  < 1 ){
                cancelAnimationFrame(animationId);
            }
            projectiles.forEach((projectile,p_index)=>{
                const dist = Math.hypot(projectile.x - enemy.x,projectile.y - enemy.y);
                if (dist -  enemy.radius - projectile.radius  < 1 ) {
                    setTimeout(()=>{
                        enemies.splice(index,1);
                        projectiles.splice(p_index,1);
                    },0)
                }
            })
        })
    }

    window.addEventListener("click",(event)=>{
        const angle = Math.atan2(
            event.clientY - innerHeight / 2,
            event.clientX - innerWidth / 2);
        const velocity = {
            x:Math.cos(angle),
            y:Math.sin(angle)
        }
        projectiles.push(new Projectile(player.x,player.y,5,'red',velocity));
    })

    animate(); 
    spawEnemies();

  return (
        <canvas
            ref={canvasRef}
            height={innerHeight}
            width={innerWidth}>
        </canvas>
  )
}
