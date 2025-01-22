   // Toggle dropdown visibility on profile button click
   document.getElementById("profileButton").addEventListener("click", function() {
    const dropdownMenu = document.getElementById("dropMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close the dropdown if clicked outside of the profile button or dropdown
window.addEventListener("click", function(event) {
    const dropdownMenu = document.getElementById("dropMenu");
    const profileButton = document.getElementById("profileButton");
    
    if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});

// Example logout function (redirect to login page)
document.getElementById("logout").addEventListener("click", function() {
    alert("Logging out...");
    window.location.href = "login.html";  // Redirect to login page
});

// Example settings function (redirect to settings page)
document.getElementById("settings").addEventListener("click", function() {
    window.location.href = "settings.html";  // Redirect to settings page
});



// select sem
const dropdown = document.getElementById('dropMenu');

        // When an option is selected, show its value in the input field
        dropdown.addEventListener('change', function() {
            alert('You selected: ' + dropdown.value);
        });



        document.getElementById('submitOutcome').addEventListener('click', function() {
            const inputField = document.getElementById('courseOutcomeInput');
            const outcomeText = inputField.value;
        
            if (outcomeText) {
              const outcomeContainer = document.createElement('div');
              outcomeContainer.classList.add('outcome-item', 'mb-2', 'p-2', 'border');
              
              const outcomeTextElement = document.createElement('span');
              outcomeTextElement.textContent = outcomeText;
              outcomeTextElement.classList.add('outcome-text');
              
              const editButton = document.createElement('button');
              editButton.textContent = 'Edit';
              editButton.classList.add('btn', 'btn-warning', 'ms-2');
              editButton.onclick = function() {
                const newOutcome = prompt('Edit Course Outcome:', outcomeTextElement.textContent);
                if (newOutcome) {
                  outcomeTextElement.textContent = newOutcome;
                }
              };
        
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
              deleteButton.onclick = function() {
                outcomeContainer.remove();
              };
        
              outcomeContainer.appendChild(outcomeTextElement);
              outcomeContainer.appendChild(editButton);
              outcomeContainer.appendChild(deleteButton);
              
              document.getElementById('courseOutcomeList').appendChild(outcomeContainer);
        
              // Clear the input field and close the modal
              inputField.value = '';
              const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
              modal.hide();
            } else {
              alert('Please enter a course outcome.');
            }
          });


          document.addEventListener('DOMContentLoaded', function() {
            const submitButton = document.getElementById('submitCourseOutcome');
            const courseInput = document.getElementById('courseInput');
            const courseOutput = document.getElementById('courseOutput');
        
            // Event listener for Submit button
            submitButton.addEventListener('click', function() {
              const inputValue = courseInput.value.trim();
              
              if (inputValue) {
                displayCourseOutcome(inputValue);  // Display the input text
                courseInput.value = '';  // Clear the input field
                const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal')); 
                modal.hide();  // Close the modal
              }
            });
        
            // Function to display the course outcome with Edit and Delete options
            function displayCourseOutcome(text) {
              const courseContainer = document.createElement('div');
              courseContainer.classList.add('course-item', 'mb-2', 'border', 'p-2');
        
              // HTML structure for the displayed outcome with buttons
              courseContainer.innerHTML = `
                <p>${text}</p>
                <button class="btn btn-warning btn-sm editBtn">Edit</button>
                <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
              `;
        
              // Event listener for the Edit button
              courseContainer.querySelector('.editBtn').addEventListener('click', function() {
                const newText = prompt("Edit your course outcome:", text);
                if (newText !== null) {
                  courseContainer.querySelector('p').textContent = newText;
                }
              });
        
              // Event listener for the Delete button
              courseContainer.querySelector('.deleteBtn').addEventListener('click', function() {
                courseContainer.remove();
              });
        
              // Append the outcome container to the output section
              courseOutput.appendChild(courseContainer);
            }
          });
              