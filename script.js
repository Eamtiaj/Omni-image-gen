let selectedTool = null;

function selectTool(toolName) {
  selectedTool = toolName;
  document.getElementById("results").innerHTML = `<p><strong>${toolName}</strong> selected. Now enter a prompt and click Generate.</p>`;
}

function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const resultBox = document.getElementById('results');

  if (!selectedTool || prompt.trim() === "") {
    resultBox.innerHTML = "<p>Please select a tool and enter a prompt first.</p>";
    return;
  }

  resultBox.innerHTML = `
    <h3>🔍 ${selectedTool} generating image for:</h3>
    <p><em>${prompt}</em></p>
    <p><strong>This is just a demo layout. You can connect real AI APIs later.</strong></p>
  `;
}
