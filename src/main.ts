import './styles.css';

const app = document.getElementById('app');

if (!app) {
  throw new Error('App container not found');
}

app.innerHTML = `
  <div class="container">
    <header>
      <h1>WebSketch Demo</h1>
      <p class="subtitle">Interactive visualization of grammar-based UI representation</p>
    </header>
    
    <main>
      <section class="demo-section">
        <h2>Paste WebSketch IR JSON</h2>
        <textarea 
          id="ir-input" 
          placeholder='{"type": "container", "children": [...]}'
          rows="10"
        ></textarea>
        <button id="visualize-btn">Visualize</button>
      </section>
      
      <section class="output-section">
        <h2>Output</h2>
        <div id="output" class="output-container"></div>
      </section>
    </main>
    
    <footer>
      <p>
        Learn more: 
        <a href="https://github.com/mcp-tool-shop/websketch-ir" target="_blank" rel="noopener">
          WebSketch IR on GitHub
        </a>
      </p>
    </footer>
  </div>
`;

// Add event listeners
const visualizeBtn = document.getElementById('visualize-btn');
const irInput = document.getElementById('ir-input') as HTMLTextAreaElement;
const output = document.getElementById('output');

visualizeBtn?.addEventListener('click', () => {
  if (!irInput || !output) return;
  
  try {
    const data = JSON.parse(irInput.value);
    output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    output.classList.remove('error');
  } catch (error) {
    output.innerHTML = `<div class="error">Invalid JSON: ${(error as Error).message}</div>`;
    output.classList.add('error');
  }
});
