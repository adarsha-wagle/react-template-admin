import { forwardRef, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';

// ----------------------------------------------------------------------

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string;
}

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref: Ref<HTMLAnchorElement>) => <Link ref={ref} to={href} {...other} />
);
