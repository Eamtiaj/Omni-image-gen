function generateImage(source) {
  const prompt = document.getElementById('prompt').value;
  const resultContainer = document.getElementById('results');
  resultContainer.innerHTML = `<p><strong>${source}</strong> is generating image for: "<em>${prompt}</em>"</p><p><em>(This is just a static demo. You can later connect APIs.)</em></p>`;
}
