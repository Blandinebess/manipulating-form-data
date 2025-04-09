# Form Data & Validation Demo

This project demonstrates how to generate a FormData object and perform form validation using built-in HTML5 attributes along with JavaScript.

## Features

- **HTML5 Validation:** Utilizes `required`, `pattern`, and `minlength` attributes to validate user input.
- **FormData API:** Creates a FormData object on form submission to capture and manipulate form data.
- **JavaScript Integration:** Prevents the default form submission, validates input, logs the form data entries to the browser console, and notifies the user upon successful submission.

## Assignment #1 Week 3, Day 2
1. Look at the first Name input in the form. Make sure that it has the html form validation attributes type=text, a minlength, and it is required.
2. Create a `<p>` underneath the input where the error message will go. This must have a unique ID you can use in the JS file.
3. Create a JS file where you can create custom form validation. The JS file should have:
   - Select the elements you need by using document.getElementByID
   - Create a function that
     - Has an if statement that checks the validity of the name input
     - If the input is not valid, then use .textContent to show an error message in the error message container (this is the `<p>` you created)
  - Then Add the submit event listener to the form, so that it runs when you click the submit button.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/form-data-validation-demo.git
