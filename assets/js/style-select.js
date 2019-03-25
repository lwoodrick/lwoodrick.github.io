const pickVisual = document.querySelector("#style-visual");
const pickDev = document.querySelector("#style-dev");
const pickUx = document.querySelector("#style-ux");

const styleGroup = [pickVisual, pickDev, pickUx];

const svgContainer = document.querySelector("#svgContainer");

const stripSelected = () => {
  styleGroup.forEach((style) => {
    style.classList.remove("selected");
  });
};


pickVisual.addEventListener("click", (event) => {
  stripSelected();
  event.srcElement.classList.add("selected");
  if (svgContainer.style.left == "-300%") {
    svgContainer.setAttribute("style", "left: -415%;");
    setTimeout(() => {
      svgContainer.setAttribute("style", "transition: none; left: -115%;");
    }, 250);
  } else {
    svgContainer.setAttribute("style", "left: -115%;");
  }
})

pickDev.addEventListener("click", (event) => {
  stripSelected();
  event.srcElement.classList.add("selected");
  svgContainer.setAttribute("style", "left: -200%;");
})

pickUx.addEventListener("click", (event) => {
  stripSelected();
  event.srcElement.classList.add("selected");
  if (svgContainer.style.left == "-115%") {
    svgContainer.setAttribute("style", "left: 0;");
    setTimeout(() => {
      svgContainer.setAttribute("style", "transition: none; left: -300%;");
    }, 250);
  } else {
    svgContainer.setAttribute("style", "left: -300%;");
  }
})
