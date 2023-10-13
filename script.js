const getS = (selector) => document.querySelector(selector);

getS(".btn-edit").onclick = function () {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  getS(".edit-area").value = getS(".top-block").innerHTML;
};

getS(".btn-save").onclick = function () {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
};

getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});

function fontSize() {
  console.log(event.target.value);
  getS(".top-block").style.fontSize = event.target.value;
}

getS("#fontFamily").onchange = (event) => {
  getS(".top-block").style.fontFamily = event.target.value;
};

// Arrow with colors
let colors = [
  "green",
  "yellow",
  "red",
  "blue",
  "coral",
  "darkgoldenrod",
  "lime",
  "hotpink",
  "orangered",
];
let bGcolors = [
  "blue",
  "yellow",
  "red",
  "coral",
  "orangered",
  "darkgoldenrod",
  "lime",
  "hotpink",
  "green",
];

// Color fill cycles for a color block
for (let i = 0; i < getS(".colors").children.length; i++) {
  getS(".colors").children[i].style.backgroundColor = colors[i];
}

for (let i = 0; i < getS(".bg-colors").children.length; i++) {
  getS(".bg-colors").children[i].style.backgroundColor = bGcolors[i];
}

// End of color fill cycles

// Start a function to change the color of the text
function changeColor() {
  if (event.target.className == "color-box") {
    getS(".top-block").style.color = event.target.style.backgroundColor;
  }
}
// End of function to change the color of the text

// Start function to change the background color
function changeBgColor() {
  if (event.target.className == "bg-color-box") {
    getS(".top-block").style.backgroundColor =
      event.target.style.backgroundColor;
  }
}

// End function to change background color

// Start events to switch blocks with color
getS(".btn-text-color").onclick = function () {
  getS(".colors").style.display = "flex";
  getS(".bg-colors").style.display = "none";
};

getS(".btn-bg-color").onclick = function () {
  getS(".colors").style.display = "none";
  getS(".bg-colors").style.display = "flex";
};

// End of event to switch blocks with color

// Start function bold style

function fontWeight() {
  if (event.target.checked) {
    getS(".top-block").classList.add("bold");
  } else {
    getS(".top-block").classList.remove("bold");
  }
}

// End function bold style

// Start event to hide blocks

getS(".btn-add").onclick = () => {
  getS(".wrapper-first").classList.remove("show");
  getS(".wrapper-second").classList.add("show");
};

// End of event to hide blocks

const list = document.forms["form-list"];

document.getElementById("list").addEventListener("click", () => {
  if (event.target.checked) {
    getS(".create-list").classList.add("show");
    getS(".create-table").classList.remove("show");
  }
});

document.getElementById("table").addEventListener("click", () => {
  if (event.target.checked) {
    getS(".create-list").classList.remove("show");
    getS(".create-table").classList.add("show");
  }
});

// Start an event to create a list

getS(".btn-create-list").onclick = function () {
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }

  getS(".edit-area").value += "</ul>";

  getS(".wrapper-first").classList.add("show");
  getS(".wrapper-second").classList.remove("show");
  
};

// End event to create list

// Start an event to create a table

const table = document.forms["form-table"];

getS('.btn-create-table').onclick = function () {
  const countTr = table["count-tr"].value;
  const countTd = table["count-td"].value;
  const countWidthTd = table["width-of-td"].value;
  const countHeightTd = table["height-of-td"].value;
  const countWidthBorder = table["width-of-border"].value;
  const TypeBorder = table["type-of-border"].value;
  const ColorBorder = table["color-of-border"].value;

  console.log(TypeBorder)

  getS(".edit-area").value += `<table style="border-spacing: 0; border-collapse: collapse">`;
  for (let i = 0; i < countTr; i++) {
    getS(".edit-area").value += `<tr>`;
      for (let j = 0; j < countTd; j++) {
        getS(".edit-area").value += `<td style="width: ${countWidthTd}px; height: ${countHeightTd}px; border: ${countWidthBorder}px ${TypeBorder} ${ColorBorder}">TD</td>`;
      }
    getS(".edit-area").value += `</tr>`;

  }
  getS(".edit-area").value += `</table>`;

  

  getS(".wrapper-first").classList.add("show");
  getS(".wrapper-second").classList.remove("show");
}


// End event to create table
