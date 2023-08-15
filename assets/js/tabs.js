function genTab(title, link, content) {
  const parentEltId = "tabs";
  var tabId = link;
  const tabClass = "tab";

  // tab wrapper
  var wrapper = document.createElement("div");
  wrapper.id = tabId.concat("-", "wrapper")
  wrapper.style.width = "35vw";
  wrapper.style.minWidth = "35vw";
  wrapper.style.borderRight = "0.3em solid var(--fg0)"

  // Tab data
  var tab = document.createElement("div");
  tab.setAttribute("class", tabClass);
  tab.id = link;
  // tab.style.position = "relative";

  // title
  var tabHeader = document.createElement("div");
  tabHeader.id = tabId.concat("-", "Title");

  // content
  var tabContent = document.createElement("div");
  tabContent.id = tabId.concat("-", "Content");

  // exit button
  var exitButton = document.createElement("div");
  exitButton.id = tabId.concat("-", "Exit");
  exitButton.innerText = "X";
  exitButton.setAttribute("class", "button top-right")
  exitButton.addEventListener("click", function() {tab.remove();});
  exitButton.style.width = "1em";
  exitButton.style.height = "1em";

  // Drawing the tab
  if (!document.getElementById(tabId)) {
    // making tab
    document.getElementById(parentEltId).append(wrapper);
    document.getElementById(wrapper.id).append(tab);
    // console.log("hi");

    // making title
    tabHeader.innerHTML = `<h1>${title.substring(1,title.length-1)}</h1>`;
    tab.appendChild(tabHeader);

    // // making button
    tab.appendChild(exitButton);

    // making content 
    tabContent.innerHTML = `${content.substring(1,content.length-2)}`;
    tab.appendChild(tabContent);
    renderMathInElement(tab, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\[ ", right: "\\]", display: true},
                {left: "\\(", right: "\\)", display: false},
            ]
        });
  }
}

function clearTabs() {
  document.getElementById("tabs").remove();
  var tabs = document.createElement("div");
  tabs.id = "tabs";
  tabs.style.display = "flex";
  document.getElementById("content").append(tabs);
}

