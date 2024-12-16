// Function to toggle the visibility of the skills section
function toggleSkillsSection(): void {
    const skillsSection = document.getElementById('skillsSection');
    if (skillsSection) {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    }
}

// Function to generate the resume (placeholder)
function generateResume(): void {
    console.log('Generating resume...');
    // Your resume generation logic here
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the toggle button
    const toggleSkillsButton = document.getElementById('toggleSkillsButton');
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', toggleSkillsSection);
    }

    // Add event listener for the generate resume button
    const generateResumeButton = document.getElementById('generateResumeButton');
    if (generateResumeButton) {
        generateResumeButton.addEventListener('click', generateResume);
    }
});

export {}; // Ensure the file is treated as a module
