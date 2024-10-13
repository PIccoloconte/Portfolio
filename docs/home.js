const boxes = document.querySelectorAll('.box');

const images = document.querySelectorAll(".project-img");
const descriptions = document.querySelectorAll(".project-description");

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8; // 80% down the viewport

    const CheckAndToggleClass = (element) => {
        const elementTop = element.getBoundingClientRect().top; // Get element's position relative to the viewport
        if (elementTop < triggerBottom) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    };

    images.forEach(CheckAndToggleClass);  // Check for images
    descriptions.forEach(CheckAndToggleClass);  // Check for descriptions
}





