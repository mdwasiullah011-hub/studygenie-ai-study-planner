function generatePlan() {
    const subjectsInput = document.getElementById("subjects").value;
    const examDateInput = document.getElementById("examDate").value;
    const hoursInput = document.getElementById("hours").value;
    const output = document.getElementById("planOutput");

    // Validation
    if (!subjectsInput || !examDateInput || !hoursInput) {
        output.innerHTML = "Please fill all the fields.";
        return;
    }

    const subjects = subjectsInput.split(",").map(s => s.trim());
    const examDate = new Date(examDateInput);
    const today = new Date();

    const timeDiff = examDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysLeft <= 0) {
        output.innerHTML = "Exam date must be in the future.";
        return;
    }

    let planHTML = `<p>You have <strong>${daysLeft}</strong> days until your exam.</p>`;
    planHTML += `<p>Study <strong>${hoursInput} hours</strong> daily.</p>`;
    planHTML += "<ul>";

    subjects.forEach((subject, index) => {
        planHTML += `<li>Day ${index + 1}: Focus on ${subject}</li>`;
    });

    planHTML += "</ul>";

    output.innerHTML = planHTML;
}
