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

  // REAL demo images
  const demoImages = [
    "https://images.unsplash.com/photo-1603415526960-f7e0328a1f4d",
    "https://images.unsplash.com/photo-1606761568499-6b3b40c0e5c0",
    "https://images.unsplash.com/photo-1611429182218-d22856f43e4b",
    "https://images.unsplash.com/photo-1613684702032-2e3ee6f7c927",
    "https://i.imgur.com/0XcUdE0.jpeg",
    "https://i.imgur.com/CpAHM03.jpeg",
    "https://i.imgur.com/kPoCz0S.jpeg",
    "https://i.imgur.com/gfMRZT2.jpeg"
  ];

  const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)];

  resultBox.innerHTML = `
    <div>
      <h3>🧠 ${selectedTool}</h3>
      <p><strong>Prompt:</strong> ${prompt}</p>
      <img src="${randomImage}" alt="Generated Image" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" />
      <p style="margin-top: 10px; font-size: 14px; opacity: 0.6;">(Demo AI-style image)</p>
    </div>
  `;
}
