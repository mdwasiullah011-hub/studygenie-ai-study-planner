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
    const question = document.getElementById("doubtInput").value.trim().toLowerCase();
    const output = document.getElementById("doubtOutput");

    if (!question) {
        output.innerHTML = "Please enter a question.";
        return;
    }

    let answer = "";

    if (question.includes("photosynthesis")) {
        answer = "Photosynthesis is the process by which green plants prepare their own food using sunlight, carbon dioxide, and water. It occurs in the presence of chlorophyll and releases oxygen as a by-product.";
    }
    else if (question.includes("newton")) {
        answer = "Newton’s First Law of Motion states that an object will remain at rest or continue to move with uniform speed in a straight line unless acted upon by an external force.";
    }
    else if (question.includes("ohm")) {
        answer = "Ohm’s Law states that the current flowing through a conductor is directly proportional to the voltage across it, provided the temperature remains constant. Mathematically, V = IR.";
    }
    else if (question.includes("speed") && question.includes("velocity")) {
        answer = "Speed is the distance travelled per unit time, whereas velocity is the speed of an object in a particular direction.";
    }
    else if (question.includes("differentiation")) {
        answer = "Differentiation is a mathematical process used to find the rate of change of a quantity with respect to another quantity. It is mainly used to find slope, speed, and maximum or minimum values.";
    }
    else if (question.includes("integration")) {
        answer = "Integration is the reverse process of differentiation. It is used to find areas, total quantities, and accumulated values.";
    }
    else if (question.includes("quadratic")) {
        answer = "A quadratic equation is a polynomial equation of degree two, usually written in the form ax² + bx + c = 0, where a ≠ 0.";
    }
    else if (question.includes("pythagoras")) {
        answer = "Pythagoras theorem states that in a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.";
    }
    else if (question.includes("french revolution")) {
        answer = "The French Revolution was a major political and social uprising in France from 1789 to 1799 that ended monarchy and promoted liberty, equality, and fraternity.";
    }
    else if (question.includes("world war 1")) {
        answer = "World War 1 was caused by militarism, alliances, imperialism, and nationalism, along with the assassination of Archduke Franz Ferdinand in 1914.";
    }
    else if (question.includes("mahatma gandhi")) {
        answer = "Mahatma Gandhi was the leader of India’s freedom struggle who followed the principles of non-violence and truth to achieve independence from British rule.";
    }
    else if (question.includes("industrial revolution")) {
        answer = "The Industrial Revolution was the period during which hand production methods were replaced by machines, leading to industrial growth and urbanization.";
    }
    else if (question.includes("democracy")) {
        answer = "Democracy is a form of government in which power is held by the people, either directly or through elected representatives.";
    }
    else if (question.includes("climate")) {
        answer = "climate change refers to long term changes in temperature and weather patterns.";
    }
    else if (question.includes("artificial intelligence")) {
        answer = "Artificial Intelligence is a branch of computer science that enables machines to perform tasks that normally require human intelligence, such as learning and decision-making.";
    }
    else {
        answer = "This question is outside the current prototype knowledge base. In the full version, the AI will generate a detailed answer using a large language model.";
    }

    output.innerHTML = answer;
}
