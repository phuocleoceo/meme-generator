window.onload = function () {
	draggable('dragTop');
	draggable('dragBottom');
};

var dragObj = null;
function draggable(id) {
	var obj = document.getElementById(id);
	obj.style.position = "absolute";
	obj.onmousedown = function () {
		dragObj = obj;
	}
}

document.onmouseup = function (e) {
	dragObj = null;
};

document.onmousemove = function (e) {
	var x = e.pageX;
	var y = e.pageY;

	if (dragObj == null)
		return;

	dragObj.style.left = x + "px";
	dragObj.style.top = y + "px";
};

// const top = document.getElementById('dragTop');
// const bottom = document.getElementById('dragBottom');
// dragElement(top);
// dragElement(bottom);

// function dragElement(ele) {
// 	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
// 	ele.onmousedown = dragMouseDown;

// 	function dragMouseDown(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		pos3 = e.clientX;
// 		pos4 = e.clientY;
// 		document.onmouseup = closeDragElement;
// 		document.onmousemove = elementDrag;
// 	}
// 	function elementDrag(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		pos1 = pos3 - e.clientX;
// 		pos2 = pos4 - e.clientY;
// 		pos3 = e.clientX;
// 		pos4 = e.clientY;
// 		ele.style.top = ele.offsetTop - pos2 + "px";
// 		ele.style.left = ele.offsetLeft - pos1 + "px";
// 	}
// 	function closeDragElement() {
// 		document.onmouseup = null;
// 		document.onmousemove = null;
// 	}
// }