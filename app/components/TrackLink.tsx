'use client';

import type { CSSProperties, PropsWithChildren } from 'react';
import { track } from '@vercel/analytics';

type Props = {
  href: string;
  event: string;            // event name to send to Vercel Analytics
  style?: CSSProperties;
  className?: string;
  title?: string;
};

export default function TrackLink({
  href,
  event,
  style,
  className,
  title,
  children,
}: PropsWithChildren<Props>) {
  const handleClick = () => {
    // fire the analytics event
    track(event);
    // no preventDefault so the link still works (mailto opens immediately)
  };

  return (
    <a href={href} onClick={handleClick} style={style} className={className} title={title}>
      {children}
    </a>
  );
}

