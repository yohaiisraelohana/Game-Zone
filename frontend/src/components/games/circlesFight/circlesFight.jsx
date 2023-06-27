import React, { useEffect, useState ,useRef } from 'react'
import './circlesFight.css'

export default function CirclesFight() {
    const canvasRef = useRef();// document.querySelector('canvas');
    const [c,setC]= useState();
    let score = 0;
    let scoreElement = document.querySelector('#score');

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
            this.x = this.x + this.velocity.x ;
            this.y = this.y + this.velocity.y ; 
        }
    }

    const friction = 0.99;
    class Particle {
        constructor(x,y,radius,color,velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color  = color;
            this.velocity = velocity;
            this.alpha = 1;
        };
        draw(){
            if (!c) {return;}
            c.save();
            c.globalAlpha = this.alpha;
            c.beginPath();
            c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            c.fillStyle = this.color;
            c.fill();
            c.restore();
        };
        update(){
            this.draw();
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y; 
            this.alpha -= 0.01;
        }
    }

    

    const player = new Player(window.innerWidth / 2,window.innerHeight / 2,10,'white');
    //! try change to useState
    const projectiles = [];
    const enemies = [];
    const particles = [];

    function spawEnemies(){
        
        setInterval(()=>{
            //create random enemy and add it to the array
            const radius = Math.random() * (30 - 5) + 5;
            let x;
            let y;
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius : window.innerWidth + radius;
                y = Math.random() * innerHeight;
            } else {
                x = Math.random() * innerWidth;
                y = Math.random() < 0.5 ? 0 - radius : window.innerHeight + radius;
            }

            const color = `hsl(${Math.random() * 360},50%,50%)`;

            const angle = Math.atan2(
                window.innerHeight / 2 - y,
                window.innerWidth / 2 - x);
            const velocity = {
                x:Math.cos(angle),
                y:Math.sin(angle)
            }
            enemies.push(new Enemy(x,y,radius,color,velocity));

        },2000);
    }

    
    let animationId ;
    function animate(){
        animationId = requestAnimationFrame(animate);
        //check if canvas is ready
        if (!c) {
            return;
        }
        //design canvas
        c.fillStyle = 'rgba(0,0,0,0.1)';
        c.fillRect(0,0,window.innerWidth,window.innerHeight);
        // draw player
        player.draw();
        particles.forEach((particle,index)=>{
            if (particle.alpha <= 0) {
                particles.slice(index,1);
            } else {
                particle.update();
            }
        });
        projectiles.forEach((projectile,index)=>{
            //update the projectile position
            projectile.update();
            // check if projectile is out of canvas and remove it
            if (projectile.x + projectile.radius < 0 ||
                projectile.x - projectile.radius > window.innerWidth||
                projectile.y + projectile.radius < 0 || 
                projectile.y - projectile.radius > window.innerHeight) {
                    setTimeout(()=>{
                        projectiles.splice(index,1);
                    },0)
            }
        });

        enemies.forEach((enemy,index)=>{
            // update enemy position
            enemy.update();

            // check if enemy touched the player
            const dist = Math.hypot(player.x - enemy.x,player.y - enemy.y);
            //  if enemy is touching the player stop the game
            if (dist -  enemy.radius - player.radius  < 1 ){
                cancelAnimationFrame(animationId);
            }
            projectiles.forEach((projectile,pindex)=>{
                const dist = Math.hypot(projectile.x - enemy.x,projectile.y - enemy.y);

            //when the enemy touches the projectile
            if (dist -  enemy.radius - projectile.radius  < 1 ) {
                score += 10;
                scoreElement.innerHTML = score;
                //create explosion animation
                for (let i = 0; i < enemy.radius * 2; i++) {
                    particles.push(
                        new Particle(projectile.x,projectile.y,
                        Math.random() * 2,
                        enemy.color,
                        {
                            x:(Math.random() - 0.5) * (Math.random()*6),
                            y:(Math.random() - 0.5) * (Math.random()*6)
                        })
                    );
                }
                //checking the radius of enemy if big take 10 from his radius else remove him
                if (enemy.radius - 10 > 5) {
                    enemy.radius -= 10;

                    setTimeout(()=>{
                        projectiles.splice(pindex,1);
                    },0);
                } else {
                    setTimeout(()=>{
                        enemies.splice(index,1);
                        projectiles.splice(pindex,1);
                    },0);
                }
                }
            })
        })
    }

    // listening to mouse events for create shooting projectiles on click
    window.addEventListener("click",(event)=>{
        const angle = Math.atan2(
            event.clientY - window.innerHeight / 2,
            event.clientX - window.innerWidth / 2);
        const velocity = {
            x:Math.cos(angle) * 5,
            y:Math.sin(angle) * 5
        }
        projectiles.push(new Projectile(player.x,player.y,5,'white',velocity));
    })

    // coll the animation game always to check the game
    animate(); 
    // call the function to create enemies
    spawEnemies();

  return (
    <div className="circle-fight-container">
        <div className="score">score <span id='score'>0</span></div>
        <canvas
            ref={canvasRef}
            height={window.innerHeight}
            width={innerWidth}>
        </canvas>
     </div>
  )
}
/* 
    *down the enemiey slow
                    // for (let i = 1; i <= 20; i++) {
                    //     setTimeout(()=>{
                    //         enemy.radius -= 0.5;
                    //     },i*50);
                    // }
*/