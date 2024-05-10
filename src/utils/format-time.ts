import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date: Date | number | null, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy';
  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: Date | number | null, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy p';
  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: Date | number | null): number {
  return date ? getTime(new Date(date)) : 0;
}

export function fToNow(date: Date | number | null): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
