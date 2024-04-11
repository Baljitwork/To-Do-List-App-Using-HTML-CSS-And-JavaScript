// Get references to the input box and the list container from the HTML document
const Input_Box = document.getElementById("input-box");
const list_Container = document.getElementById("list-container");


function addtask() {       
  // Check if the input box is empty
  if (Input_Box.value === "") {
    // Alert the user if the input box is empty
    alert("You must write something!");
  } else {
    // If the input box is not empty, create a new list item
    let li = document.createElement("li");
    // Set the inner HTML of the list item to the value of the input box
    li.innerHTML = Input_Box.value;
    // Append the list item to the list container
    list_Container.appendChild(li);
    // Create a span element for the delete button
    let span = document.createElement("span");
    // Set the inner HTML of the span to a Unicode character for '✗' (cross symbol)
    span.innerHTML = "\u00d7";
    // Append the span to the list item
    li.appendChild(span);
  }
  // Clear the input box after adding the task
  Input_Box.value = "";
  // Save the updated task list to local storage
  saveData();
}

// Add event listener to the list container for clicks
list_Container.addEventListener("click", function(e) {
  // If the clicked element is a list item
  if (e.target.tagName === 'LI') {
    // Toggle the 'checked' class on the clicked list item
    e.target.classList.toggle("checked");
    // Save the updated task list to local storage
    saveData();
  }
  // If the clicked element is a delete button (span)
  else if (e.target.tagName === "SPAN") {
    // Remove the parent list item of the clicked delete button
    e.target.parentElement.remove();
    // Save the updated task list to local storage
    saveData();
  }
}, false);

// Function to save the task list to local storage
function saveData() {
  localStorage.setItem("data", list_Container.innerHTML);
}

// Function to display the saved task list from local storage
function showtask() {
  list_Container.innerHTML = localStorage.getItem("data");
}

// Call the function to display the saved task list when the page loads
showtask();
