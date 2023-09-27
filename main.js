const allowDrop = (e) => {
  e.preventDefault();
  // console.log(e.target.id)
  document.getElementById(e.target.id).classList.add("hovering")
}

// TODO 2
// Use the `allowDrop` function as a template to make this function 
// be called when a draggable object exits a valid dropzone 
// so the green background is removed.
const stopDrop = (e) => {
  e.preventDefault();
  
  document.getElementById(e.target.id).classList.remove("hovering");
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

const drop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}