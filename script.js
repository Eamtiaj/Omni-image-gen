let selectedTool = null;

function selectTool(toolName) {
  selectedTool = toolName;
  document.getElementById("results").innerHTML = `
    <p><strong>${toolName}</strong> selected. Now enter a prompt and click Generate.</p>
  `;
}

function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const resultBox = document.getElementById('results');

  if (!selectedTool || prompt.trim() === "") {
    resultBox.innerHTML = "<p>Please select a tool and enter a prompt first.</p>";
    return;
  }

  // Static fake image preview
  const fakeImageURL = "https://placehold.co/400x300?text=AI+Image";

  resultBox.innerHTML = `
    <div style="padding: 10px;">
      <h3>🧠 ${selectedTool}</h3>
      <p><strong>Prompt:</strong> ${prompt}</p>
      <img src="${fakeImageURL}" alt="Generated Image" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" />
      <p style="margin-top: 10px; font-size: 14px; opacity: 0.6;">(This is a demo image. Real AI connection coming soon.)</p>
    </div>
  `;
}
