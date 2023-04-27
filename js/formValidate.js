/********w************
    
	Project 4
	Name: Daniel Martens
    Date: April 25, 2023
    Description: The javascript for the Daniel Martens Portfolio website.

*********************/

/*
 * Handles the submit event of the survey form
 *
 * param e A reference to the event object
 * return True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear form?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("name").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Does all the error checking for the form.
 *
 * return True if an error was found; False if no errors were found
 */
function formHasErrors() {

	let errorFlag = false;

	//check that the name field is filled in
	if (trim(document.getElementById("name").value) == ""){
		document.getElementById("name_error").style.display = "block";
		if (!errorFlag){
			errorFlag = true;
			document.getElementById("name").focus();
		}
	}

	//check that the phone number field is filled in and valid
	if (trim(document.getElementById("phone").value) == ""){
		document.getElementById("phone_error").style.display = "block";
		if (!errorFlag){
			errorFlag = true;
			document.getElementById("phone").focus();
		}
	}
	else if (trim(document.getElementById("phone").value).length != 10 || isNaN(trim(document.getElementById("phone").value)))
	{
		document.getElementById("phoneformat_error").style.display = "block";
		if (!errorFlag){
			errorFlag = true;
			document.getElementById("phone").focus();
		}
	}

	//Check that the email address is filled in and is valid
	let emailText = trim(document.getElementById("email").value);
	let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	if (emailText == ""){
		document.getElementById("email_error").style.display = "block";
		if (!errorFlag){
			errorFlag = true;
			document.getElementById("email").focus();
		}
	}
	else if (!emailRegex.test(emailText)){
		document.getElementById("emailformat_error").style.display = "block";
		if (!errorFlag){
			errorFlag = true;
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}
	}

	return errorFlag;

}//END FUNCTION formHasErrors

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
	//Run the hideErrors function on load.
	hideErrors();
	// Add event listener for the form submit
	document.getElementById("contact").addEventListener("submit", validate);
	//Submit button event listener.
	document.getElementById("submit").addEventListener("submit", validate);
	//Clear button event listener.
	document.getElementById("clear").addEventListener("click", resetForm);
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);












