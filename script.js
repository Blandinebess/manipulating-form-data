const form = document.getElementById("registration-form");
const output = document.getElementById("formDataOutput");
const submissionOutput = document.getElementById("output"); // New div for submissions
const firstName = document.getElementById("firstName");
const errorMsgOutput = document.getElementById("firstnameErrorMSG");

// Form validation + data processing
function formValidation(event) {
  event.preventDefault();

  // HTML5 built-in form validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // First Name custom validation
  if (!firstName.checkValidity()) {
    errorMsgOutput.textContent = firstName.title;
    return;
  } else {
    errorMsgOutput.textContent = ""; // Clear error if valid
  }

  // Step 1: Get all form data using FormData
  const formData = new FormData(form);

  // Step 2: Turn it into a plain object
  const Data = Object.fromEntries(formData);

  console.log("Submitted Data:", Data); // Step 3: Log to console

  // Step 4: Push the data object into the submissions array
  submissions.push(Data);

  // Step 5: Show confirmation to user
  alert("Form submitted successfully!");

  // Step 6: Display all submissions
  displaySubmissions();

  // Step 7: Reset form
  form.reset();
}

// Function to display all submissions from the array
function displaySubmissions() {
  submissionOutput.innerHTML = ""; // Clear previous entries

  submissions.forEach((entry, index) => {
    const div = document.createElement("div");
    div.className = "submission-entry";
    div.innerHTML = `
      <p><strong>Submission ${index + 1}</strong></p>
      <p><strong>First Name:</strong> ${entry.firstName}</p>
      <p><strong>Last Name:</strong> ${entry.lastName}</p>
      <p><strong>Email:</strong> ${entry.email}</p>
      <p><strong>Password:</strong> ${entry.password}</p>
      <p><strong>Birthday:</strong> ${entry.birthday}</p>
      <p><strong>Language:</strong> ${entry.language}</p>
      <hr/>
    `;
    submissionOutput.appendChild(div);
  });
}

// Hook up event listener
form.addEventListener("submit", formValidation);
