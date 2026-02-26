import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'WebSketch Demo',
  description: 'Interactive demo site for WebSketch IR — visualize grammar-based UI representation.',
  logoBadge: 'WS',
  brandName: 'WebSketch Demo',
  repoUrl: 'https://github.com/mcp-tool-shop-org/websketch-demo',
  footerText: 'MIT Licensed — built by <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">MCP Tool Shop</a>',

  hero: {
    badge: 'Open source',
    headline: 'Visualize',
    headlineAccent: 'UI grammar.',
    description: 'Paste a WebSketch IR capture and instantly see tree views, ASCII wireframes, and side-by-side diffs. No install required.',
    primaryCta: { href: '#features', label: 'See features' },
    secondaryCta: { href: 'https://github.com/mcp-tool-shop-org/websketch-ir', label: 'WebSketch IR' },
    previews: [
      { label: 'Capture', code: '// Chrome extension captures the page\n{ "tag": "main", "role": "main", "children": [...] }' },
      { label: 'Visualize', code: '// Paste JSON → Tree view + ASCII wireframe\n┌─────────────────────────┐\n│ [header] nav, search    │\n│ [main]   article, aside │\n└─────────────────────────┘' },
      { label: 'Compare', code: '// Diff two captures side-by-side\n+ added: [banner] role\n- removed: [footer] links\n~ changed: 3 nodes' },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'features',
      title: 'Features',
      subtitle: 'Everything you need to inspect and compare UI structures.',
      features: [
        { title: 'Tree view', desc: 'Hierarchical visualization with role badges, semantic hints, and bounding box info for every node.' },
        { title: 'ASCII wireframe', desc: 'Text-based layout rendering — see how the page is structured without opening a browser.' },
        { title: 'Compare mode', desc: 'Diff two captures side-by-side with ASCII comparison and a summary of added, removed, and changed nodes.' },
      ],
    },
    {
      kind: 'features',
      id: 'more',
      title: 'Built for developers',
      subtitle: 'Fast, lightweight, no dependencies.',
      features: [
        { title: 'Export bundles', desc: 'Download shareable .ws.json files that bundle a capture with its metadata for offline review.' },
        { title: 'Schema validation', desc: 'Live JSON editor validates against the WebSketch IR grammar as you type.' },
        { title: 'Vanilla TypeScript', desc: 'No framework overhead. Built with Vite, tested with Vitest, deployed to GitHub Pages.' },
      ],
    },
    {
      kind: 'code-cards',
      id: 'quickstart',
      title: 'Quick start',
      cards: [
        { title: 'Use online', code: '# Visit the live demo:\n# https://mcp-tool-shop-org.github.io/websketch-demo/\n\n# 1. Paste WebSketch IR JSON\n# 2. Click Visualize\n# 3. Switch to Compare mode for diffs' },
        { title: 'Run locally', code: 'git clone https://github.com/mcp-tool-shop-org/websketch-demo.git\ncd websketch-demo\n\nnpm ci\nnpm run dev\n# -> http://localhost:3000' },
      ],
    },
  ],
};
