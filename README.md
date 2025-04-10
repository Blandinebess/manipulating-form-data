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

## Assignment #2 Week 3, Day 3
1. Add everything to the formValidation function you created on day #1
2. First create a variable called formData.
   - This Variable should use `new FormData()` method to create a formData object.  
4. Now change the formData into an object using the `Object.fromEntries(FormData)` so we can use it later in the application. Save this object to a variable called Data.
4. Console log the variable Data.
5. Display an alert to let the user know they successfully completed the form.
6. Use `form.reset()` to clear the form after submission.

## Assignment #3 Week 3, Day 4 - Display your input objects on the page
1. Create an array called submissions. Save this to the top of the JS file
2. Create a div with an id = output. Select this div in your JS file using `document.getElementByID()`
3. Update your existing formValidation function to push the variable Data (the object with the input data from the form) to the submissions array using `array.push`. 
4. Create a new function called displaySubmissions. Your new function should:
     - Loop through the submissions array
     - Create a new div using `document.createElement`
     - Add the data to the div using `.innerHTML` and object dot notation
     - Add the new div to the output with `.appendChild`
  
5. Call the displaySubmissions function before we reset the form in the formValidation function
6. Testing:
  - Use `console.log` to make sure the data object is formed correctly.
  - Try different inputs to make sure the form still works as expected.
  - Try throttling the network tab in the dev tools network tab to see if it impacts the form saving the data on the page.
  - Use the dev tools debugging tools to help find problems if the code isn't running as expected.
  
## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/form-data-validation-demo.git
