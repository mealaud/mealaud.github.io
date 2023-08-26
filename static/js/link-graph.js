/* global d3 */

// data for connections
var data = JSON.parse(document.getElementById("search-data-jsonstring").getAttribute("data-jsonstring"));

// console.log(data);


// variables for how stuff looks
var numNodes = Object.keys(data.nodes).length;
var linkOpacity = 1;
var linkWidth = 3;
var pageNodeRadius = 6;
var sectionNodeRadius = 1.5*pageNodeRadius;
var repelStrength = 4/numNodes;
var clickCutoffTime = 100;
var pageNodeColor = "var(--fg1)";
var sectionNodeColor = "#87ceeb";
var highlightColor = "var(--orange2)";
var highlightWidth = 10;
var unhighlightedOpacity = 0;
var highlightedOpacity = 0.5;
var pageBackgroundColor = "var(--bg)";

// Specify the dimensions of the chart.
var width = document.documentElement.clientWidth * 0.25;
var height = document.documentElement.clientHeight * 0.45;
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
    .attr("id", "link-graph-svg")
    .attr("width", width)
    .attr("height", height);

// Add a line for each link, and a circle for each node.
const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", linkOpacity)
  .selectAll("line")
  .data(links)
  .join("line")
    .attr("id", d => (d.source.id).concat("-", d.target.id))
    // .attr("id", d => (d.source).concat("-", d.target))
    .attr("stroke-width", linkWidth);

const node = svg.append("g")
      .attr("stroke", highlightColor)
      .attr("stroke-width", highlightWidth)
      .attr("stroke-opacity", unhighlightedOpacity)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
    .attr("r", d => d.kind === "section" || d.rootpage === "true" ? sectionNodeRadius : pageNodeRadius)
    .attr("cx", centerX)
    .attr("cy", centerY)
    .attr("fill", d => d.kind === "section" || d.rootpage === "true" ? sectionNodeColor : pageNodeColor)
    .attr("id", d => (d.link).concat("-", "node"))
    // .on("mouseover", d => document.getElementById("link-graph-current-node").innerHTML = d.Title);
    .on("click", function(event, d) {
      document.getElementById((d.link).concat("/", "button")).click();
    })
    .on("mouseover", function(event, d) {
      // document.getElementById("link-graph-current-node").innerHTML = d.id;
      document.getElementById((d.link).concat("-", "node")).style.strokeOpacity = 0.5;
      document.getElementById((d.link).concat("-", "text")).style.opacity = 1;
      document.getElementById((d.link).concat("-", "text")).style.fontSize = "1.2em";
    })
    .on("mouseout", function(event, d) {
      // document.getElementById("link-graph-current-node").innerHTML = "Select Page";
      document.getElementById((d.link).concat("-", "node")).style.strokeOpacity = 0;
      document.getElementById((d.link).concat("-", "text")).style.opacity = 0.2;
      document.getElementById((d.link).concat("-", "text")).style.fontSize = nodeTextSize;
    });

const text = svg.append("g")
  .selectAll("text")
  .data(nodes)
  .join("text")
    .attr("x", centerX)
    .attr("y", centerY)
    .attr("dy", d => d.kind === "section" ? textHover*sectionNodeRadius : textHover*pageNodeRadius)
    .attr("id", d => (d.link).concat("-", "text"))
    .style("fill", "white")
    .style("text-anchor", "middle")
    .style("font-size", nodeTextSize)
    .style("user-select", "none")
    // .text(d => d.kind === "section" || d.rootpage === "true" ? d.id : null);
    .style("opacity", "0.2")
    .text(d => d.id);

// Add a drag behavior.
node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

// Set the position attributes of links and nodes each time the simulation ticks.
simulation.on("tick", () => {
  // if (width )
  width = document.documentElement.clientWidth * 0.25;
  // height = document.documentElement.clientWidth * 0.5;
  centerX = width/2;
  // centerY = height/2;

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
}

function searchResults() {
  var query = document.getElementById("page-search-input").value;
  var nodeData = nodes;
  var linkData = links;
  var source;
  var target;
  if (query != "") {
    linkData = linkData.filter( function(entry) {
      source = entry.source.id;
      target = entry.target.id;
      return (source.toLowerCase().replace(/\s+/g, "")).includes(query.toLowerCase().replace(/\s+/g, "")) || (target.toLowerCase().replace(/\s+/g, "")).includes(query.toLowerCase().replace(/\s+/g, ""));
    });
  }
  var usedNodeIds = {};
  for (let l of linkData) {
    usedNodeIds[l.source.id] = true;
    usedNodeIds[l.target.id] = true;
  }
  console.log(usedNodeIds);
  return usedNodeIds;
}

function updateGraph() {
  var usedNodeIds = searchResults();
  for (var n of nodes) {
    // console.log(document.getElementById((n.link).concat("-", "node")).r );
    document.getElementById((n.link).concat("-", "node")).setAttribute("r", 0);
    document.getElementById((n.link).concat("-", "text")).style.opacity = 0;
    if (usedNodeIds[n.id]) {
      document.getElementById((n.link).concat("-", "node")).setAttribute("r", n.kind === "section" ? sectionNodeRadius : pageNodeRadius);
      document.getElementById((n.link).concat("-", "text")).style.opacity = 1;
    } 
  }
  var source;
  for (var l of links) {
    source = l.source.id;
    // console.log(source);
    document.getElementById(source.concat("-", l.target.id)).style.strokeOpacity = usedNodeIds[l.source.id] && usedNodeIds[l.target.id] ? linkOpacity : 0;
  }
}
