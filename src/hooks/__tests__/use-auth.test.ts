import { renderHook } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';

import { useAuth } from '../use-auth.ts';

describe('useAuth', () => {
  it('returns initial user object', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current).toEqual({ name: 'Your name', age: 20 });
  });
});
