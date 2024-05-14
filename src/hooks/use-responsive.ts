import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// --------------------------------------------------------------------
type TBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TQuery = 'up' | 'down' | 'between' | 'only';

export function useResponsive(query: TQuery, start: TBreakPoint, end: TBreakPoint): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  console.log('media', mediaUp, mediaDown, mediaBetween, mediaOnly);

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}
