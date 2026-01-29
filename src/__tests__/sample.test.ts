import { describe, it, expect } from 'vitest';

describe('Sample test', () => {
  it('should pass basic assertion', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello WebSketch';
    expect(greeting).toContain('WebSketch');
  });
});
