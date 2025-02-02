var content_wrapper = document.getElementById("content-wrapper");
const canvas_side_length = content_wrapper.offsetWidth
const center_coords = canvas_side_length/2;
var canvas = document.createElement("canvas");
canvas.setAttribute("width", canvas_side_length);
canvas.setAttribute("height", canvas_side_length);
canvas.setAttribute("style", "position: relative");
content_wrapper.appendChild(canvas);


// Axis ticks
const num_ticks_per_side = 8;
const num_ticks_total = 2 * num_ticks_per_side;
const tick_length = 10;
const delta = canvas_side_length/num_ticks_total;

function recenter(coord) {
  return coord + center_coords;
}

var ctx = canvas.getContext("2d");
// Real Axis
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(0, center_coords); 
ctx.lineTo(canvas_side_length, center_coords);
ctx.stroke();

// Tick marks for Reals
for (let s = 1 - num_ticks_per_side; s < num_ticks_per_side; s++) {
  if ( s != 0 ) {
    ctx.beginPath(); 
    ctx.strokeStyle = "white";
    ctx.moveTo(recenter(s * delta), recenter(-tick_length)); 
    ctx.lineTo(recenter(s * delta), recenter(tick_length)); 
    ctx.stroke(); 
  }
}


// Imaginary axis
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(center_coords, 0);
ctx.lineTo(center_coords, canvas_side_length);
ctx.stroke();

// Tick marks for imaginary
for (let s = 1 - num_ticks_per_side; s < num_ticks_per_side; s++) {
  if ( s != 0 ) {
    ctx.beginPath(); 
    ctx.strokeStyle = "white";
    ctx.moveTo(recenter(-tick_length), recenter(s * delta), ); 
    ctx.lineTo(recenter(tick_length), recenter(s * delta),); 
    ctx.stroke(); 
  }
}
