let timeoutId;
const buttonExplanations = {
    'button1': 'Home button was clicked. This button can perform will take you to the home page.',
    'button2': 'About button was clicked. This button will tell you about the project.',
    'button3': 'Contact button was clicked. This button will provide contact information of the project Author.',
    'button4': 'Explore button was clicked. This button can navigate to other sections.',
};

const videoContainer = document.getElementById('video-container');
const explanationElm = document.getElementById('explanation');



function resetVideoContainer() {
  
    videoContainer.style.top = '80%';
    videoContainer.style.left = '80%';

    explanationElm.textContent = '';
    videoContainer.classList.remove('active');
}

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

        videoContainer.style.top = `${buttonPosition.top + buttonPosition.height + 10}px`;
        videoContainer.style.left = `${buttonPosition.left + buttonPosition.width / 2 + 10}px`;

        videoContainer.classList.add('active');

        if (videoContainer.classList.contains('active')) {
            explanationElm.textContent = explanation;
        }

        clearTimeout(timeoutId);

        timeoutId = setTimeout(resetVideoContainer, 5000);

    });
});