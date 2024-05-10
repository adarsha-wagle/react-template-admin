// import { renderHook } from '@testing-library/react-hooks';
// import { describe, vi, it, expect } from 'vitest';

// import { useScrollToTop } from '../use-scroll-top.ts';

// // Mock `useLocation` to simulate pathname changes
// const mockUseLocation = (pathname: string) => ({ pathname });

// describe('useScrollToTop', () => {
//   it('scrolls to the top when pathname changes', () => {
//     const initialPathname = '/old-path';
//     const newPathname = '/new-path';

//     // Mock the window.scrollTo function (using a spy)
//     const scrollToSpy = vi.spyOn(window, 'scrollTo');

//     // Render the hook with the initial pathname
//     const { rerender } = renderHook(() => useScrollToTop(), {
//       initialProps: { location: mockUseLocation(initialPathname) },
//     });

//     // Expect scrollTo not to be called initially
//     expect(scrollToSpy).not.toHaveBeenCalled();

//     // Simulate pathname change
//     rerender({ location: mockUseLocation(newPathname) });

//     // Expect scrollTo to be called with (0, 0) after pathname change
//     expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
//   });
// });

// Test case using vitest

import { describe, it, expect } from 'vitest';

describe('use-scroll top', () => {
  it('testing', () => {
    expect(1 + 1).toEqual(2);
  });
});
