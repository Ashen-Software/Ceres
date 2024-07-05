import { memo, SVGProps } from 'react';

const Line3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1156 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1155' stroke='#CE8BFA' strokeWidth={2} />
  </svg>
);

const Memo = memo(Line3Icon);
export { Memo as Line3Icon };
