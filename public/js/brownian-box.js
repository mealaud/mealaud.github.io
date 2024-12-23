const particle_radius = 1;
const canvas = document.getElementById("simulation");
const ctx = canvas.getContext("2d");


class Brownian_Box {
  constructor(height,width,num_particles) {
    ctx.strokeRect(0,0,height,width);
  }
}


function start_sim(height,width,num_particles) {
  var sim = new Brownian_Box(100,500,10);
}
