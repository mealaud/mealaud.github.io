/* global d3 */

// data for connections
var data = JSON.parse(document.getElementById("data-jsonstring").getAttribute("data-jsonstring"));
console.log(data);

// variables for how stuff looks
var numNodes = Object.keys(data.nodes).length;
var linkOpacity = 1;
var linkWidth = 3;
var pageNodeRadius = 6;
var sectionNodeRadius = 1.5*pageNodeRadius;
var repelStrength = 4/numNodes;
var clickCutoffTime = 100;
var pageNodeColor = "#ebdbb2";
var sectionNodeColor = "#87ceeb";

var start, end;
// Specify the dimensions of the chart.
var width = document.documentElement.clientWidth * 0.3;
var height = document.documentElement.clientWidth * 0.5;
var centerX = width/2;
var centerY = height/2;
var textHover = -1.5;
var nodeTextSize = "0.7em";

// Specify the color scale.
// const color = d3.scaleOrdinal(d3.schemeCategory10);
const color = d3.scaleOrdinal(d3.schemeCategory10);

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
const links = data.links.map(d => ({...d}));
const nodes = data.nodes.map(d => ({...d}));

// Create a simulation with several forces.
var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody()
      .strength(repelStrength*-1000))
    .force("collide", d3.forceCollide().radius(sectionNodeRadius+1))
    .force("x", d3.forceX(width/2))
    .force("y", d3.forceY(height/2))
    .force('center', d3.forceCenter(centerX, centerY));

// Create the SVG container.

var svg = d3.select("#base").append("svg")
    .attr("width", width)
    .attr("height", height);

// Add a line for each link, and a circle for each node.
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", linkOpacity)
  .selectAll("line")
  .data(links)
  .join("line")
    .attr("stroke-width", linkWidth);

const node = svg.append("g")
  .selectAll("circle")
  .data(nodes)
  .join("circle")
    .attr("r", d => d.kind === "section" ? sectionNodeRadius : pageNodeRadius)
    .attr("cx", centerX)
    .attr("cy", centerY)
    .attr("fill", d => d.kind === "section" ? sectionNodeColor : pageNodeColor)
    // .on("mouseover", d => document.getElementById("link-graph-current-node").innerHTML = d.Title);
    .on("mouseover", function(event, d) {
       document.getElementById("link-graph-current-node").innerHTML = d.id;
    });

const text = svg.append("g")
  .selectAll("text")
  .data(nodes)
  .join("text")
    .attr("x", centerX)
    .attr("y", centerY)
    .attr("dy", d => d.kind === "section" ? textHover*sectionNodeRadius : textHover*pageNodeRadius)
    .style("fill", "white")
    .style("text-anchor", "middle")
    .style("font-size", nodeTextSize)
    .text(d => d.kind === "section" || d.rootpage === "true" ? d.id : null);

// Add a drag behavior.
node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

// Set the position attributes of links and nodes each time the simulation ticks.
simulation.on("tick", () => {
  width = document.documentElement.clientWidth * 0.3;
  height = document.documentElement.clientWidth * 0.5;
  centerX = width/2;
  centerY = height/2;

  simulation
      .force("x", d3.forceX(width/2))
      .force("y", d3.forceY(height/2))
      .force('center', d3.forceCenter(centerX, centerY));
  svg
      .attr("width", width)
      .attr("height", height);
  link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

  node
      .attr("cx", d => d.x > width ? width : d.x < 0 ? 0 : d.x)
      .attr("cy", d => d.y > height ? height : d.y < 0 ? 0 : d.y);

  text
      .attr("x", d => d.x > width ? width : d.x < 0 ? 0 : d.x)
      .attr("y", d => d.y > height ? height : d.y < 0 ? 0 : d.y);
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
  event.subject.fx = event.x > width ? width : event.x < 0 ? 0 : event.x;
  event.subject.fy = event.y > height ? height : event.y < 0 ? 0 : event.y;
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

