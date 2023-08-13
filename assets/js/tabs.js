function genTab(args) {
  // page variables
  const splitArgs = args.split("&&&12391&&&");
  const title = splitArgs[0];
  const link = splitArgs[1];
  const content = splitArgs[2];
  const parentEltId = "tabs";
  var tabId = link;
  const tabClass = "tab";

  // Tab data
  var tab = document.createElement("div");
  tab.setAttribute("class", tabClass);
  tab.id = link;
  tab.style.position = "relative";

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
  exitButton.setAttribute("class", "exit-button")
  exitButton.addEventListener("click", function() {tab.remove();});
  exitButton.style.width = "1em";
  exitButton.style.height = "1em";

  // Drawing the tab
  if (!document.getElementById(tabId)) {
    // making tab
    document.getElementById(parentEltId).append(tab);

    // making title
    tabHeader.innerHTML = `<h1>${title.substring(1,title.length)}</h1>`;
    tab.appendChild(tabHeader);

    // // making button
    tab.appendChild(exitButton);

    // making content 
    tabContent.innerHTML = `${content.substring(0,content.length-2)}`;
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
