function getStudyAdvice(subject) {
    const s = subject.toLowerCase();

    if (s.includes("math")) {
        return "practice numerical problems, revise formulas, and solve previous year questions.";
    } else if (s.includes("history")) {
        return "revise timelines, important events, and practice descriptive answers.";
    } else if (s.includes("physics")) {
        return "focus on core concepts, derivations, and numerical problem-solving.";
    } else if (s.includes("chemistry")) {
        return "revise reactions, formulas, and practice problem-based questions.";
    } else {
        return "focus on understanding concepts, revising notes, and practicing questions.";
    }
}

function generatePlan() {
    const subjectsInput = document.getElementById("subjects").value;
    const examDateInput = document.getElementById("examDate").value;
    const hoursInput = document.getElementById("hours").value;
    const output = document.getElementById("planOutput");

    if (!subjectsInput || !examDateInput || !hoursInput) {
        output.innerHTML = "Please fill all the fields.";
        return;
    }

    const subjects = subjectsInput.split(",").map(s => s.trim());
    const examDate = new Date(examDateInput);
    const today = new Date();

    const timeDiff = examDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysLeft <= 0) {
        output.innerHTML = "Exam date must be in the future.";
        return;
    }

    let planHTML = "<p><strong>Study Plan Overview</strong></p>";
    planHTML += `<p>You have <strong>${daysLeft}</strong> days until your exam.</p>`;
    planHTML += `<p>Daily study time: <strong>${hoursInput} hours</strong></p>`;
    planHTML += "<ul>";

    subjects.forEach((subject, index) => {
        const advice = getStudyAdvice(subject);
        planHTML += `
            <li>
                <strong>Day ${index + 1}:</strong> Study <strong>${subject}</strong> for ${hoursInput} hours —
                ${advice}
            </li>
        `;
    });

    planHTML += "</ul>";
    output.innerHTML = planHTML;
}
