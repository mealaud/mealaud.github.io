/* global d3 */

var dataString = document.getElementById("data-jsonstring").getAttribute("data-jsonstring");  
// console.log(dataString);
var data = JSON.parse(dataString);

// console.log(data);

const width = 928;
const height = 680;
const r = 1;

// const links = data.links.map(d => ({...d}));
// const nodes = data.nodes.map(d => ({...d}));
const links = data.links;
const nodes = data.nodes;
const simulation = d3.forceSimulation()
                      .force("x", d3.forceX())
                      .force("y", d3.forceY())
                      .force("collide", d3.forceCollide(r+1))
                      .force("charge", d3.forceManyBody())
                      .force("link", d3.forceLink()
                        .id(function (d) { return d.title; }));

const svg = d3.create("svg")
              .attr("width", width)
              .attr("height", height)
              .attr("viewBox", [-width / 2, -height / 2, width, height])
              .attr("style", "max-width: 100%; height: auto;");

const link = svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
      // .attr("stroke-width", d => Math.sqrt(d.value));
      .attr("stroke-width", 1);


const node = svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", "white");

node.append("title")
      .text(d => d.title);

node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

simulation.nodes(data.nodes);
simulation.force("link")
  .links(data.links);
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
}

document.getElementById("link-graph").appendChild(svg);
