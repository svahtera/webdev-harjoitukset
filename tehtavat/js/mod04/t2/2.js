const element = document.querySelector("#target");
const bulletOne = document.createElement("li");
const bulletTwo = document.createElement("li");
const bulletThree = document.createElement("li");

text = document.createTextNode("First Item");
bulletOne.appendChild(text);
element.appendChild(bulletOne);

text = document.createTextNode("Second Item");
bulletTwo.appendChild(text);
bulletTwo.id = "my-item"
element.appendChild(bulletTwo);

text = document.createTextNode("Third Item");
bulletThree.appendChild(text);
element.appendChild(bulletThree);