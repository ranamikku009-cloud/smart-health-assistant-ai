async function askAI() {
  const input = document.getElementById("question").value;
  const output = document.getElementById("answer");

  if (input.trim() === "") {
    output.innerHTML = "⚠️ Please enter a health question.";
    return;
  }

  output.innerHTML = "⏳ Thinking...";

  const API_KEY = "rsk_01KX5QWTK21NTVKHY6TTV0K0NH";

  try {
    const response = await fetch("https://api.meshy.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful health assistant. Give general health information only and advise consulting a doctor for emergencies."
          },
          {
            role: "user",
            content: input
          }
        ]
      })
    });

    const data = await response.json();

if (!response.ok) {
  output.innerHTML = "❌ " + (data.error?.message || "API Error");
  return;
}

output.innerHTML = data.choices[0].message.content;