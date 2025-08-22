'use client';

import type {
  PropsWithChildren,
  AnchorHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { track } from '@vercel/analytics';

// Let TypeScript know gtag can exist on window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type Props = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> & {
  href: string;
  event: string; // event name to send to Vercel Analytics & Google
};

export default function TrackLink({
  href,
  event,
  children,
  onClick,
  onKeyDown,
  ...rest
}: Props) {
  const sendGoogleEvent = (label: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // GA4/Ads generic event. You can rename "event" to match your Ads conversion action.
      window.gtag('event', event, {
        event_category: 'conversion',
        event_label: label,
        value: 1,
      });
    }
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track(event);           // Vercel
    sendGoogleEvent(href);  // Google
    if (onClick) onClick(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      track(event);
      sendGoogleEvent(href);
    }
    if (onKeyDown) onKeyDown(e);
  };

  return (
    <a href={href} onClick={handleClick} onKeyDown={handleKeyDown} {...rest}>
      {children}
    </a>
  );
}
