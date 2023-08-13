function genTab(args) {
  // page variables
  const splitArgs = args.split("&&&12391&&&");
  const title = splitArgs[0];
  const link = splitArgs[1];
  const content = splitArgs[2];
  var tabId = link;

  // Tab
  var tab = document.createElement("div");
  tab.id = tabId;
  tab.style.minWidth = "35vw";
  tab.style.width = "35vw";
  tab.style.borderLeft = "3px solid #a89984";
  tab.style.paddingLeft = "3px";

  // title
  var tabTitle = document.createElement("div");
  tabTitle.id = tabId.concat("-", "Title");

  // content
  var tabContent = document.createElement("div");
  tabContent.id = tabId.concat("-", "Content");

  // exit button
  var exitButton = document.createElement("button");
  exitButton.id = tabId.concat("-", "Exit");
  exitButton.style.width = "5%";
  exitButton.style.height = "5%";
  exitButton.innerHTML = "X";
  exitButton.style.top = "0%";
  exitButton.style.right = "0%";
  exitButton.style.alignSelf = "flex-end";
  exitButton.addEventListener("click", function() {
    tab.remove();
  });

  // Drawing the tab
  if (!document.getElementById(tabId)) {
    // making tab
    document.getElementById("content").append(tab)

    // making title
    tabTitle.innerHTML = `<h1>${title.substring(1,title.length)}</h1>`
    document.getElementById(tabId).appendChild(tabTitle);

    // making content 
    tabContent.innerHTML = `${content.substring(0,content.length-2)}`;
    document.getElementById(tabId).appendChild(tabContent);
    renderMathInElement(document.getElementById(tabId), {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\[ ", right: "\\]", display: true},
                {left: "\\(", right: "\\)", display: false},
            ]
        });

    // making button
    document.getElementById(tabId).appendChild(exitButton);
  }
}
