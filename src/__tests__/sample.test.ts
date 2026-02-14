import { describe, it, expect } from 'vitest';

describe('websketch-demo', () => {
  it('JSON.parse round-trips valid IR', () => {
    const ir = { type: 'container', children: [{ type: 'button', text: 'Click' }] };
    const json = JSON.stringify(ir);
    const parsed = JSON.parse(json);
    expect(parsed.type).toBe('container');
    expect(parsed.children).toHaveLength(1);
  });

  it('JSON.parse throws on invalid input', () => {
    expect(() => JSON.parse('not-json')).toThrow();
  });
});
