var fuse; // holds our search engine
var searchVisible = false; 
var firstRun = true; // allow us to delay loading json data unless search activated
var list = document.getElementById('searchResults'); // targets the <ul>
var first = list.firstChild; // first child of search list
var last = list.lastChild; // last child of search list
var maininput = document.getElementById('searchInput'); // input box for search
var resultsAvailable = false; // Did we get any search results?

// ==========================================
// The main keyboard event listener running the show
//
document.addEventListener('keydown', function(event) {

  // CMD-/ to show / hide Search
  if (event.ctrlKey && event.which === 191) {
      // Load json search index if first time invoking search
      // Means we don't load json unless searches are going to happen; keep user payload small unless needed
      if(firstRun) {
        loadSearch(); // loads our json data and builds fuse.js search index
        firstRun = false; // let's never do this again
      }

      // Toggle visibility of search box
      if (!searchVisible) {
        document.getElementById("fastSearch").style.visibility = "visible"; // show search box
        document.getElementById("searchInput").focus(); // put focus in input box so you can just start typing
        searchVisible = true; // search visible
      }
      else {
        document.getElementById("fastSearch").style.visibility = "hidden"; // hide search box
        document.activeElement.blur(); // remove focus from search box 
        searchVisible = false; // search not visible
      }
  }

  // Allow ESC (27) to close search box
  if (event.keyCode == 27 || event.keyCode == 13) {
    if (searchVisible) {
      document.getElementById("fastSearch").style.visibility = "hidden";
      document.activeElement.blur();
      document.getElementById("contentResults").remove();
      searchVisible = false;
    }
  }

  // DOWN (40) arrow
  if (event.keyCode == 40) {
    if (searchVisible && resultsAvailable) {
      // console.log("down");
      event.preventDefault(); // stop window from scrolling
      if ( document.activeElement == maininput) { first.focus(); } // if the currently focused element is the main input --> focus the first <li>
      else if ( document.activeElement == last ) { last.focus(); } // if we're at the bottom, stay there
      else { document.activeElement.parentElement.nextSibling.firstElementChild.focus(); } // otherwise select the next search result
    }
  }

  // UP (38) arrow
  if (event.keyCode == 38) {
    if (searchVisible && resultsAvailable) {
      event.preventDefault(); // stop window from scrolling
      if ( document.activeElement == maininput) { maininput.focus(); } // If we're in the input box, do nothing
      else if ( document.activeElement == first) { maininput.focus(); } // If we're at the first item, go to input box
      else { document.activeElement.parentElement.previousSibling.firstElementChild.focus(); } // Otherwise, select the search result above the current active one
    }
  }
});


// ==========================================
// execute search as each character is typed
//
document.getElementById("searchInput").onkeyup = function(e) { 
  executeSearch(this.value);
}


// ==========================================
// fetch some json without jquery
//
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
          if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}


// ==========================================
// load our search index, only executed once
// on first call of search box (CMD-/)
//
function loadSearch() { 
  fetchJSONFile('/index.json', function(data){

    var options = { // fuse.js options; check fuse.js website for details
      shouldSort: true,
      // location: 0,
      // distance: 100,
      ignoreLocation: true,
      threshold: 0.0,
      includeMatches: true,
      minMatchCharLength: 4,
      findAllMatches: true,
      keys: [
        'plain',
        'title'
        // 'relpermalink'
        // 'permalink',
        // 'summary'
        ]
    };
    fuse = new Fuse(data, options); // build the index from the json file
  });
}


// ==========================================
// using the index we loaded on CMD-/, run 
// a search query (for "term") every time a letter is typed
// in the search box
//
function executeSearch(term) {
  let results = fuse.search(term); // the actual query being run using fuse.js
  let searchitems = ''; // our results bucket

  if (results.length === 0) { // no results based on what was typed into the input box
    resultsAvailable = false;
    searchitems = '';
  } else { // build our html 
    for (let item in results) { // only show first 5 results
      var id = (results[item].item.relpermalink).concat("-", "search-item");
      if (results[item].item.relpermalink.includes("notes")) {
        searchitems = searchitems + '<li><div id="' + id + '" tabindex="0"><span class="title">🗒️&nbsp;' + results[item].item.relpermalink.slice(1,-1) + '</span><br /></div></li>';
      }
      else if (results[item].item.relpermalink.includes("hobbies")) {
        searchitems = searchitems + '<li><div id="' + id + '" tabindex="0"><span class="title">🪨&nbsp;' + results[item].item.relpermalink.slice(1,-1) + '</span><br /></div></li>';
      }
      else if (results[item].item.relpermalink.includes("axioms")) {
        searchitems = searchitems + '<li><div id="' + id + '" tabindex="0"><span class="title">📜&nbsp;' + results[item].item.relpermalink.slice(1,-1) + '</span><br /></div></li>';
      }
      else {
        searchitems = searchitems + '<li><div id="' + id + '" tabindex="0"><span class="title">❔&nbsp;' + results[item].item.relpermalink.slice(1,-1) + '</span><br /></div></li>';
      }
    }
    resultsAvailable = true;
  }

  document.getElementById("searchResults").innerHTML = searchitems;
  if (results.length > 0) {
    first = list.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
    last = list.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
  }
  // (results[item].matches[1]).indices
  if (results.length > 0) {
    content = new Array(results.length);
    for (let item in results) {
      if (results[item].matches[0].key === "plain") {
        // console.log(results[item].matches[0].value);
        // console.log(results[item].matches[0].indices);
        // content[item] = highlightText(results[item].item.content, results[item].matches[0].indices, results[item].item.plain);
        content[item] = results[item].item.content;
      }
      else {
        content[item] = results[item].item.content;
      }
      // keyboard events!
      var id = (results[item].item.relpermalink).concat("-", "search-item");
      document.getElementById(id).addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
          var t = `.${results[item].item.title}.`;
          var l = `.${results[item].item.relpermalink}.`;
          var d = `.${results[item].item.date}.`;
          var c = `.${content[item]}..`;
          genTab(t, l, c, d);
        }
      });
      document.getElementById(id).addEventListener("focus", function() {
        if (document.getElementById("contentResults")) {
          document.getElementById("contentResults").remove();
        }
        var contentResults = document.createElement("div");
        contentResults.id = "contentResults";
        contentResults.setAttribute("class", "border content-results");
        // contentResults.style.display = "flex";
        // contentResults.style.justifyContent = "center";
        
        var wrapper = document.createElement("div");
        wrapper.id = id.concat("-", "wrapper");
        wrapper.setAttribute("class", "content-wrapper");
        var previewHeader = document.createElement("span");
        previewHeader.setAttribute("class", "search-header");
        previewHeader.style.left = "1em";
        previewHeader.innerHTML = "Post Preview";

        var header = document.createElement("div");
        header.id = id.concat("-", "header");
        header.style.left = "2em";
        header.style.marginRight = "1em";
        header.innerHTML = `<h1>${results[item].item.title}<br><span style="opacity: 0.5; font-size: 0.5em">Last modified: ${results[item].item.date}</span></h1>`

        var body = document.createElement("div");
        body.id = id.concat("-", "body");
        body.setAttribute("class", "body");
        body.innerHTML = content[item];

        if (document.getElementById(header.id)) {
          document.getElementById(header.id).remove();
          document.getElementById(body.id).remove();
        }
        
        document.getElementById("fastSearch").append(contentResults);
        contentResults.append(wrapper);
        wrapper.append(previewHeader);
        wrapper.append(header);
        wrapper.append(body);

        renderMathInElement(contentResults, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false},
                    {left: "\\[ ", right: "\\]", display: true},
                    {left: "\\(", right: "\\)", display: false},
                ]
            });
      });
    }
  }
}

function highlightText(initContent, matchIndices, initPlain) {
  var highlightedWords = new Set();

  for (let i = 0; i < matchIndices.length; i++) {
    highlightedWords.add(initPlain.slice(matchIndices[i][0], matchIndices[i][1]+1));
  }

  var lspan = '<span class="highlighted">';
  var rspan = '</span>';
  for (const w of highlightedWords) {
    initContent = initContent.replaceAll(w,lspan.concat(w).concat(rspan));
  }

  console.log(initContent);
  return initContent;
}
