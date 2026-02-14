import './styles.css';
import { validateCapture } from '@mcptoolshop/websketch-ir';

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
          placeholder='{"version": "0.1", "url": "...", "root": {...}}'
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
        <a href="https://github.com/mcp-tool-shop-org/websketch-ir" target="_blank" rel="noopener">
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

  // Step 1: Parse JSON
  let data: unknown;
  try {
    data = JSON.parse(irInput.value);
  } catch (error) {
    // XSS-safe: use textContent, never innerHTML with user data
    output.textContent = `Invalid JSON: ${(error as Error).message}`;
    output.classList.add('error');
    output.classList.remove('success');
    return;
  }

  // Step 2: Validate against WebSketch schema
  const issues = validateCapture(data);
  if (issues.length > 0) {
    output.classList.add('error');
    output.classList.remove('success');

    // Build error display safely (no innerHTML with user data)
    output.textContent = '';
    const header = document.createElement('div');
    header.className = 'validation-header';
    header.textContent = `Validation failed (${issues.length} issue${issues.length > 1 ? 's' : ''}):`;
    output.appendChild(header);

    const list = document.createElement('ul');
    list.className = 'validation-issues';
    for (const issue of issues.slice(0, 10)) {
      const li = document.createElement('li');
      li.textContent = `${issue.path}: expected ${issue.expected}, got ${issue.received}`;
      list.appendChild(li);
    }
    output.appendChild(list);

    if (issues.length > 10) {
      const more = document.createElement('div');
      more.className = 'validation-overflow';
      more.textContent = `... and ${issues.length - 10} more issue${issues.length - 10 > 1 ? 's' : ''}`;
      output.appendChild(more);
    }
    return;
  }

  // Step 3: Render validated capture (safe — validated data)
  output.classList.remove('error');
  output.classList.add('success');
  output.textContent = '';
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  output.appendChild(pre);
});
