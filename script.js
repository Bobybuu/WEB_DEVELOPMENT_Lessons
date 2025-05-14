// Change the text content of a paragraph
function changeText() {
    const description = document.getElementById("description");
    description.textContent = "🎉 The text has been updated dynamically!";
  }
  
  // Change background color of an element
  function changeColor() {
    const box = document.getElementById("color-box");
    box.style.backgroundColor = "lightgreen";
    box.style.color = "darkgreen";
    box.style.fontWeight = "bold";
  }
  
  // Add a new element to the DOM
  function addElement() {
    const container = document.getElementById("dynamic-container");
  
    // Check if element already exists
    if (!document.getElementById("new-paragraph")) {
      const newElement = document.createElement("p");
      newElement.id = "new-paragraph";
      newElement.textContent = "✅ A new paragraph was added!";
      container.appendChild(newElement);
    }
  }
  
  // Remove the added element
  function removeElement() {
    const existing = document.getElementById("new-paragraph");
    if (existing) {
      existing.remove();
    }
  }
  