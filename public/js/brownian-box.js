const box_width = 600;
const box_height = box_width;
const dt = 1;
const particle_radius = 5;
const num_particles = 100;
const max_particle_speed = 3;

var cv = document.createElement('canvas');
cv.setAttribute("id","sim-box");
cv.setAttribute("width",box_width);
cv.setAttribute("height",box_height);
document.getElementById("content-wrapper").appendChild(cv);
const canvas = document.getElementById("sim-box");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(0,0,canvas.width,canvas.height);



let particles = [];

class Particle {
  constructor(x,y,vx,vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  draw_particle() {
    ctx.beginPath();
    ctx.arc(this.x,this.y,particle_radius,0,2*Math.PI);
    ctx.fillStyle="white";
    ctx.fill();
  }

  update() {
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (this.x < 2*particle_radius || this.x > box_width-2*particle_radius) {
      this.vx *= -1;
    }
    if (this.y < 2*particle_radius || this.y > box_height-2*particle_radius) {
      this.vy *= -1;
    }
    for (let i = 0; i < num_particles; i++) {
      let q = particles[i];
      if (q != this) {
        if ( (this.x-q.x)**2 + (this.y-q.y)**2 <= (2*particle_radius)**2) {
          const K_i = (this.vx**2+this.vy**2) + (q.vx**2+q.vy**2);
          const dist = (this.x-q.x)**2+(this.y-q.y)**2;
          const dot_prod = (this.vx-q.vx)*(this.x-q.x)+(this.vy-q.vy)*(this.y-q.y);
          const displ_vec = [this.x-q.x,this.y-q.y];

          var curr_vel = [this.vx - (dist/dot_prod)*displ_vec[0], this.vy - (dist/dot_prod)*displ_vec[1]];
          var other_vel = [q.vx - (dist/dot_prod)*(-1*displ_vec[0]), q.vy - (dist/dot_prod)*(-1*displ_vec[1])];

          const K_false = (curr_vel[0]**2 + curr_vel[1]**2) + (other_vel[0]**2 + other_vel[1]**2);

          const scale = Math.sqrt(K_i/K_false);

          this.vx = curr_vel[0]*scale;
          this.vy = curr_vel[1]*scale;
          q.vx = other_vel[0]*scale;
          q.vy = other_vel[1]*scale;
        }
      }
    }
  }
}

var positions = [];
for (let i = 0; i < num_particles; i++) {
  let x = Math.random() * box_width + 2*particle_radius;
  let y = Math.random() * box_height + 2*particle_radius;
  let vx = (Math.random()*2-1)*max_particle_speed;
  let vy = (Math.random()*2-1)*max_particle_speed;
  particles.push(new Particle(x,y,vx,vy));
}


function sim() {
  for (let i = 0; i < num_particles; i++) {
    particles[i].draw_particle();
  }

  function animate() {
    ctx.clearRect(0,0,box_width,box_height);

    for (let i = 0; i < num_particles; i++) {
      particles[i].update();
      particles[i].draw_particle();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

sim();
