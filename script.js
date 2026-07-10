function askAI() {
    const input = document.getElementById("question").value;
    const output = document.getElementById("answer");

    if (input.trim() === "") {
        output.innerHTML = "⚠️ Please enter a health question.";
        return;
    }

    output.innerHTML =
        "🤖 AI Response: This is a demo version. Please consult a qualified doctor for medical advice.";
}