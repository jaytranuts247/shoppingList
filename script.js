var button = document.getElementById("enter");
var ClearAll_btn = document.getElementById("ClearAll");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_lists = ul.querySelectorAll("span");
var delbtns = document.getElementsByClassName("delete");

// set event for remove button
function RemoveParent(btn) {
	btn.addEventListener("click", function (e) {
		btn.parentNode.remove();
	});
}

// set event to toggle class
function toggledone(l) {
	l.addEventListener("click", function () {
		this.classList.toggle("done");
	});
}

for (var i = 0; i < li_lists.length; i++) {
	toggledone(li_lists[i]);
	// console.log(li_lists[i].type);
}

//add remove event for 'delete' button
for (var i = 0; i < delbtns.length; i++) {
	RemoveParent(delbtns[i]);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var trashicon = document.createElement("i");
	trashicon.classList.add("far", "fa-trash-alt", "delete");

	var span = document.createElement("span");
	span.classList.add("span");
	span.appendChild(document.createTextNode(input.value));

	var li = document.createElement("li");
	li.appendChild(span);

	li.appendChild(trashicon);
	toggledone(li);

	ul.appendChild(li);

	RemoveParent(trashicon);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function ClearAll(e) {
	var newli_list = ul.querySelectorAll("li");
	for (var i = 0; i < newli_list.length; i++) {
		newli_list[i].remove();
	}
}

ClearAll_btn.addEventListener("click", ClearAll);
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
