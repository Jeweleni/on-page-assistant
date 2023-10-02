let timeoutId;
const buttonExplanations = {
    'button1': 'Sign Up button was clicked. This button can perform a sign-up action.',
    'button2': 'Login button was clicked. This button can perform a login action.',
    'button3': 'Learn More button was clicked. This button can provide more information.',
    'button4': 'Contact Us button was clicked. This button can open a contact form.',
    'button5': 'Explore button was clicked. This button can navigate to other sections.',
    'button6': 'Get Started button was clicked. This button can initiate the onboarding process.'
};

const videoContainer = document.getElementById('video-container');
const explanationElm = document.getElementById('explanation');


// Function to reset the video container and clear explanation text
function resetVideoContainer() {
    // Return video container to its normal position
    videoContainer.style.top = '80%';
    videoContainer.style.left = '80%';

    // Clear the explanation text
    explanationElm.textContent = '';

    // Remove the "active" class to hide the video container
    videoContainer.classList.remove('active');
}

// Add click event listeners to each button
Object.keys(buttonExplanations).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function () {
        const explanation = buttonExplanations[buttonId];

        // eslint-disable-next-line no-restricted-globals
        const rect = event.target.getBoundingClientRect();
        const buttonPosition = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height,
        };

        // Move the video container close to the clicked button
        videoContainer.style.top = `${buttonPosition.top + buttonPosition.height + 10}px`;
        videoContainer.style.left = `${buttonPosition.left + buttonPosition.width / 2 + 10}px`;



        // Show the video container by adding the "active" class
        videoContainer.classList.add('active');

        if (videoContainer.classList.contains('active')) {
            explanationElm.textContent = explanation;
        }

        clearTimeout(timeoutId);

        // Set a new timer to reset the video container and clear the text after 1 minute
        timeoutId = setTimeout(resetVideoContainer, 5000);

    });
});