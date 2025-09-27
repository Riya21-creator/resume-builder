document.getElementById("resumeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const achievements = document.getElementById("achievements").value;
    const projects = document.getElementById("projects").value;
    const certifications = document.getElementById("certifications").value;

    // ✅ Build resume output
    const resumeHTML = `
        <h2>${name}</h2>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Achievements</h3>
        <p>${achievements}</p>
        <h3>Projects</h3>
        <p>${projects}</p>
        <h3>Certifications</h3>
        <p>${certifications}</p>
    `;

    document.getElementById("resumeOutput").innerHTML = resumeHTML;
});




// Download Resume as PDF
document.getElementById("downloadBtn").addEventListener("click", function() {
    const resume = document.getElementById("resumePreview");
    const opt = {
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(resume).save();
});

// Print Resume
document.getElementById("printBtn").addEventListener("click", function() {
    const printContents = document.getElementById("resumePreview").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload(); // reload so form comes back
});