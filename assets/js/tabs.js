function genTab(args) {
  var splitArgs = args.split("&");
  const title = splitArgs[0];
  const link = splitArgs[1];
  const content = splitArgs[2];
  console.log(content);
  var postTab = document.createElement("div");
  postTab.id = link;
  postTab.style.borderLeft = "3px solid #a89984";
  postTab.style.paddingLeft = "3px";
  if (!document.getElementById(link)) {
    postTab.innerHTML = content;
    document.getElementById("content").appendChild(postTab);
  }
}
