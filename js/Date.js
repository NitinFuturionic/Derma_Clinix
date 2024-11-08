function openDatePicker() {
    // Create a hidden date input element dynamically
    var hiddenDateInput = document.createElement('input');
    hiddenDateInput.type = 'date';
    hiddenDateInput.style.position = 'absolute'; // Position offscreen
    hiddenDateInput.style.opacity = '0'; // Make it invisible
    hiddenDateInput.style.pointerEvents = 'none'; // Ensure it doesn't interfere with other elements

    // Append the hidden date input to the body
    document.body.appendChild(hiddenDateInput);

    // Programmatically click on the hidden input to open the date picker
    hiddenDateInput.click();

    // When a date is selected, set the value to the main input field
    hiddenDateInput.onchange = function () {
      document.getElementById('dateInput').value = hiddenDateInput.value; // Set selected date to the main input
      document.body.removeChild(hiddenDateInput); // Remove the hidden input
    };
  }





    // Wait for the DOM to load before adding event listeners
    document.addEventListener('DOMContentLoaded', function () {
        // Get both buttons and the enquiry form
        const appointmentButton = document.querySelector('.SmallNavBar-appointmentButton');
        const appointmentButtonTwo = document.querySelector('#top_button');
        const appointmentButtonThree = document.querySelector('#Book_Appointment');
        
        const enquiryForm = document.getElementById('enquiry-form');
        
        // Add click event listener to the first button (SmallNavBar-appointmentButton)
        appointmentButton.addEventListener('click', function (event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Scroll to the enquiry form with smooth scrolling
            enquiryForm.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
        
        // Add click event listener to the second button (NavBar-button)
        appointmentButtonTwo.addEventListener('click', function (event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Scroll to the enquiry form with smooth scrolling
            enquiryForm.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });


        appointmentButtonThree.addEventListener('click', function (event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Scroll to the enquiry form with smooth scrolling
            enquiryForm.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
