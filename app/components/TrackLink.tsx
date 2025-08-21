'use client';

import type {
  PropsWithChildren,
  AnchorHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { track } from '@vercel/analytics';

type Props = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> & {
  href: string;
  event: string; // event name to send to Vercel Analytics
};

export default function TrackLink({
  href,
  event,
  children,
  onClick,
  onKeyDown,
  ...rest
}: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // fire the analytics event (don’t block navigation)
    track(event);
    // if parent passed its own onClick, call it too
    if (onClick) onClick(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    // also track keyboard activation for accessibility
    if (e.key === 'Enter' || e.key === ' ') {
      track(event);
    }
    if (onKeyDown) onKeyDown(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </a>
  );
}
