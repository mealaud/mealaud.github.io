function genTab(args) {
  const splitArgs = args.split("&&&12391&&&");
  const title = splitArgs[0];
  const link = splitArgs[1];
  const content = splitArgs[2];
  var postTab = document.createElement("div");
  postTab.id = link;
  postTab.style.minWidth = "33vw";
  // postTab.style.height = "100vh";
  postTab.style.borderLeft = "3px solid #a89984";
  postTab.style.paddingLeft = "3px";
  if (!document.getElementById(link)) {
    postTab.innerHTML = content;
    document.getElementById("content").appendChild(postTab);
    renderMathInElement(document.getElementById(link), {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\[ ", right: "\\]", display: true},
                {left: "\\(", right: "\\)", display: false},
            ]
        });
  }
}
