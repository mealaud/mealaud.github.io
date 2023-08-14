/* global d3 */

// data for connections
var data = JSON.parse(document.getElementById("data-jsonstring").getAttribute("data-jsonstring"));
// console.log(data);

// variables for how stuff looks
var linkOpacity = 1;
var nodeRadius = 8;
var repelStrength = 0.5;
var clickCutoffTime = 100;

var start, end;
// Specify the dimensions of the chart.
const width = 300;
const height = 300;

// Specify the color scale.
// const color = d3.scaleOrdinal(d3.schemeCategory10);
const color = d3.scaleOrdinal(d3.schemeCategory10);

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
const links = data.links.map(d => ({...d}));
const nodes = data.nodes.map(d => ({...d}));

// Create a simulation with several forces.
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody()
      .strength(repelStrength*-1000))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

// Create the SVG container.

const svg = d3.select("#base").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

// Add a line for each link, and a circle for each node.
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", linkOpacity)
  .selectAll("line")
  .data(links)
  .join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

const node = svg.append("g")
  .selectAll("circle")
  .data(nodes)
  .join("circle")
    .attr("r", nodeRadius)
    .attr("fill", d => ((d.kind === "section") ? "#d79921" : "#ebdbb2"));

node.append("text")
    .text(d => d.id);

// Add a drag behavior.
node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

// Set the position attributes of links and nodes each time the simulation ticks.
simulation.on("tick", () => {
  link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

  node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
});

// Reheat the simulation when drag starts, and fix the subject position.
function dragstarted(event) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  event.subject.fx = event.subject.x;
  event.subject.fy = event.subject.y;
  start = +new Date();
}

// Update the subject (dragged node) position during drag.
function dragged(event) {
  event.subject.fx = event.x;
  event.subject.fy = event.y;
}

// Restore the target alpha so the simulation cools after dragging ends.
// Unfix the subject position now that it’s no longer being dragged.
function dragended(event) {
  if (!event.active) simulation.alphaTarget(0);
  event.subject.fx = null;
  event.subject.fy = null;
  end = +new Date();
  // console.log(end - start)
  if (end-start < clickCutoffTime) { // hacky solution by just measuring if "mouse is held down very briefly" and treating a shortenough press as a click!
    if (event.subject.link.split("/").length > 3) {
      document.getElementById(event.subject.link.concat("/button")).click();
    }
  }
}

