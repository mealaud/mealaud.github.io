function genTab(title, link, content, date) {
  const parentEltId = "tabs";
  var tabId = link.substring(1,link.length-1);
  var nodeId = tabId.concat("-", "node");
  date = date.substring(1,date.length-1);
  // console.log(nodeId);


  // tab wrapper
  var wrapper = document.createElement("div");
  wrapper.id = tabId.concat("-", "wrapper")
  wrapper.style.width = "35vw";
  wrapper.style.minWidth = "35vw";
  wrapper.style.borderRight = "0.3em solid var(--fg0)";
  wrapper.addEventListener("mouseover", function() {
    if (document.getElementById(nodeId)) {
      document.getElementById(nodeId).style.strokeOpacity = 0.5;
    }
  });
  wrapper.addEventListener("mouseout", function() {
    if (document.getElementById(nodeId)) {
      document.getElementById(nodeId).style.strokeOpacity = 0;
    }
  });

  // Tab data
  var tab = document.createElement("div");
  tab.setAttribute("class", "tab");
  tab.id = tabId;

  var tabTitle = document.createElement("div");
  tabTitle.id = tabId.concat("-", "Title");
  tabTitle.innerHTML = `<h1>${title.substring(1,title.length-1)}<br><span style="opacity: 0.5; font-size: 0.5em">Last modified: ${date}</span></h1>`;

  // content
  var tabContent = document.createElement("div");
  tabContent.id = tabId.concat("-", "Content");
  tabContent.style.height = "60vh";
  tabContent.style.overflowY = "auto";

  // exit button
  var exitButton = document.createElement("div");
  exitButton.id = tabId.concat("-", "Exit");
  exitButton.innerText = "X";
  exitButton.setAttribute("class", "button top-right");
  exitButton.addEventListener("click", function() {
    wrapper.remove();
    document.getElementById(tabId.concat("-", "node")).style.strokeOpacity = 0;
  });
  // exitButton.addEventListener("click", function() {wrapper.remove();});
  // exitButton.addEventListener("click", function() {
  //   wrapper.classList.add("shrink");
  //   // wrapper.style.whitespace = "nowrap";
  //   // wrapper.remove();
  // });
  // exitButton.addEventListener("transitionend", function() {wrapper.remove();}, true);
  exitButton.addEventListener("mouseover", function() {
    exitButton.style.backgroundColor = "var(--fg0)";
    exitButton.style.color = "var(--bg)";
  });
  exitButton.addEventListener("mouseout", function() {
    exitButton.style.backgroundColor = "var(--bg)";
    exitButton.style.color = "var(--fg0)";
  });
  exitButton.style.width = "1em";
  exitButton.style.height = "1em";

  // Drawing the tab
  if (!document.getElementById(tabId)) {
    // making tab
    document.getElementById(parentEltId).append(wrapper);
    wrapper.append(tab);

    // making title
    tab.append(tabTitle);
    tab.append(exitButton);

    // making content 
    tabContent.innerHTML = `${content.substring(1,content.length-2)}`;
    tab.append(tabContent);
    renderMathInElement(tab, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\[ ", right: "\\]", display: true},
                {left: "\\(", right: "\\)", display: false},
            ]
        });
  } else {
    wrapper.style.backgroundColor = "var(--orange2)";
    // wrapper.style.backgroundColor = rgba(254,128,25,0.5);
    // setTimeout(function() {
    //   wrapper.style.backgroundColor = initBackgroundColor;
    // }, 2000);
  }
}

function clearTabs() {
  document.getElementById("tabs").remove();
  var tabs = document.createElement("div");
  tabs.id = "tabs";
  tabs.style.display = "flex";
  document.getElementById("content").append(tabs);
}

function highlightButton(x) {
  x.style.backgroundColor = "var(--fg0)";
  x.style.color = "var(--bg)";
} function unHighlightButton(x) {
  x.style.backgroundColor = "var(--bg)";
  x.style.color = "var(--fg0)";
}

