import { describe, it, expect } from 'vitest';
import { validateCapture, type WebSketchValidationIssue } from '@mcptoolshop/websketch-ir';

// =============================================================================
// IR validation imports
// =============================================================================

describe('websketch-demo IR imports', () => {
  it('imports validateCapture from websketch-ir', () => {
    expect(typeof validateCapture).toBe('function');
  });
});

// =============================================================================
// JSON parsing
// =============================================================================

describe('JSON parsing for demo input', () => {
  it('JSON.parse round-trips valid IR', () => {
    const capture = {
      version: '0.1',
      url: 'https://example.com',
      timestamp_ms: 1700000000000,
      viewport: { w_px: 1920, h_px: 1080, aspect: 1920 / 1080 },
      compiler: { name: 'websketch-ir', version: '0.2.1', options_hash: 'test' },
      root: {
        id: '', role: 'PAGE', bbox: [0, 0, 1, 1],
        interactive: false, visible: true,
      },
    };
    const json = JSON.stringify(capture);
    const parsed = JSON.parse(json);
    expect(parsed.version).toBe('0.1');
    expect(parsed.root.role).toBe('PAGE');
  });

  it('JSON.parse throws on invalid input', () => {
    expect(() => JSON.parse('not-json')).toThrow();
  });
});

// =============================================================================
// validateCapture for demo input
// =============================================================================

describe('validateCapture for demo', () => {
  it('valid capture → no issues', () => {
    const capture = {
      version: '0.1',
      url: 'https://example.com',
      timestamp_ms: 1700000000000,
      viewport: { w_px: 1920, h_px: 1080, aspect: 1920 / 1080 },
      compiler: { name: 'websketch-ir', version: '0.2.1', options_hash: 'test' },
      root: {
        id: '', role: 'PAGE', bbox: [0, 0, 1, 1],
        interactive: false, visible: true,
      },
    };
    const issues = validateCapture(capture);
    expect(issues).toHaveLength(0);
  });

  it('empty object → multiple issues', () => {
    const issues = validateCapture({});
    expect(issues.length).toBeGreaterThan(0);
  });

  it('invalid version → issue', () => {
    const issues = validateCapture({ version: '99.0' });
    const versionIssue = issues.find((i: WebSketchValidationIssue) => i.path === 'version');
    expect(versionIssue).toBeDefined();
  });

  it('string with XSS payload → issues (treated as data, not code)', () => {
    const issues = validateCapture({
      version: '<script>alert(1)</script>',
    });
    // Validation catches the wrong version, XSS payload is just a string
    const versionIssue = issues.find((i: WebSketchValidationIssue) => i.path === 'version');
    expect(versionIssue).toBeDefined();
    expect(versionIssue!.received).toContain('<script>');
  });

  it('captures with many nodes validate correctly', () => {
    const children = Array.from({ length: 100 }, (_, i) => ({
      id: `btn-${i}`,
      role: 'BUTTON',
      bbox: [i * 0.01, 0, 0.01, 0.01],
      interactive: true,
      visible: true,
    }));
    const capture = {
      version: '0.1',
      url: 'https://example.com',
      timestamp_ms: 1700000000000,
      viewport: { w_px: 1920, h_px: 1080, aspect: 1920 / 1080 },
      compiler: { name: 'websketch-ir', version: '0.2.1', options_hash: 'test' },
      root: {
        id: '', role: 'PAGE', bbox: [0, 0, 1, 1],
        interactive: false, visible: true,
        children,
      },
    };
    const issues = validateCapture(capture);
    expect(issues).toHaveLength(0);
  });
});
