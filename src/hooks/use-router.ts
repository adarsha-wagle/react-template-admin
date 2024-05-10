import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Generates a custom router object with various navigation methods.
 *
 * @return {Object} The custom router object with navigation methods.
 */
export function useRouter() {
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
    }),
    [navigate]
  );

  return router;
}
