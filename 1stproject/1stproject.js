var ul = document.getElementById("myUl");

function add() {
  var item = document.getElementById("newItem").value;
  var itemTxt = document.createTextNode(item);
  var li = document.createElement("li");
  var btn = document.createElement("button");
  var btnx = document.createTextNode("x");
  btn.setAttribute("onclick", "remove()");
  btn.appendChild(btnx);
  li.appendChild(itemTxt);
  li.appendChild(btn);
  ul.appendChild(li);
  localStorage["list"] = ul.innerHTML
}

function remove() {
  var task = this.event.currentTarget.parentNode;
  ul.removeChild(task);
  localStorage["list"] = ul.innerHTML // updating localstorage
}

if (localStorage["list"]) {
  ul.innerHTML = localStorage["list"];
}

