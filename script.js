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
function solveDoubt() {
    const question = document.getElementById("doubtInput").value;
    const output = document.getElementById("doubtOutput");

    if (!question) {
        output.innerHTML = "Please enter a question.";
        return;
    }

    const q = question.toLowerCase();

    let answer = "";

    if (q.includes("photosynthesis")) {
        answer = "Photosynthesis is the process by which green plants make their own food using sunlight, carbon dioxide, and water.";
    } else if (q.includes("newton")) {
        answer = "Newton’s First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force.";
    } else if (q.includes("ohm")) {
        answer = "Ohm’s Law states that the current through a conductor is directly proportional to the voltage across it, provided temperature remains constant.";
    } else if (q.includes("velocity")) {
        answer = "Velocity is speed in a given direction, whereas speed only tells how fast an object is moving.";
    } else {
        answer = "This is a conceptual question. The AI analyzes the topic and provides a simplified explanation to help the student understand it clearly.";
    }

    output.innerHTML = answer;
}
