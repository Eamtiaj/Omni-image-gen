let selectedTool = null;

function selectTool(toolName) {
  selectedTool = toolName;
  document.getElementById("results").innerHTML = `
    <p><strong>${toolName}</strong> selected. Now enter a prompt and click Generate.</p>
  `;
}

function generateImage() {
  const prompt = document.getElementById('prompt').value.trim();
  const resultBox = document.getElementById('results');

  if (!selectedTool || prompt === "") {
    resultBox.innerHTML = "<p>Please select a tool and enter a prompt first.</p>";
    return;
  }

  // List of demo images
  const demoImages = [
    "https://placehold.co/600x400?text=AI+Art+1",
    "https://placehold.co/600x400?text=AI+Art+2",
    "https://placehold.co/600x400?text=AI+Art+3",
    "https://placehold.co/600x400?text=AI+Art+4"
  ];

  // Random image
  const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)];

  resultBox.innerHTML = `
    <div>
      <h3>🧠 ${selectedTool}</h3>
      <p><strong>Prompt:</strong> ${prompt}</p>
      <img src="${randomImage}" alt="Generated Image" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" />
      <p style="margin-top: 10px; font-size: 14px; opacity: 0.6;">(This is a demo AI image. Real generation coming soon.)</p>
    </div>
  `;
}
