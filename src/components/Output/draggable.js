var dragObj = null;
function draggable(id) {
	let obj = document.getElementById(id);
	obj.style.position = "absolute";
	obj.onmousedown = () => dragObj = obj;
}

document.onmouseup = (e) => dragObj = null;

document.onmousemove = (e) => {
	let x = e.pageX;
	let y = e.pageY;

	if (dragObj == null)
		return;

	dragObj.style.left = x + "px";
	dragObj.style.top = y + "px";
};

export { draggable }