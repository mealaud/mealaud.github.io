function genTab(args) {
  var splitArgs = args.split("&");
  const link = splitArgs[1];
  const title = splitArgs[3];
  const content = splitArgs[5];
  var postTab = document.createElement("div");
  postTab.id = link;
  postTab.style.borderLeft = "3px solid #a89984";
  postTab.style.paddingLeft = "3px";
  if (!document.getElementById(link)) {
    postTab.innerHTML = {{ .Content }};
    document.getElementById("content").appendChild(postTab);
  }
}
