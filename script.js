"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to toggle the visibility of the skills section
function toggleSkillsSection() {
    var skillsSection = document.getElementById('skillsSection');
    if (skillsSection) {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
}
// Function to generate the resume (placeholder)
function generateResume() {
    console.log('Generating resume...');
    // Your resume generation logic here
}
// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the toggle button
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', toggleSkillsSection);
    }
    // Add event listener for the generate resume button
    var generateResumeButton = document.getElementById('generateResumeButton');
    if (generateResumeButton) {
        generateResumeButton.addEventListener('click', generateResume);
    }
});
