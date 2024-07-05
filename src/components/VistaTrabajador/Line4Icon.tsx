import { memo, SVGProps } from 'react';

const Line4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 529 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L528.003 0' stroke='#CE8BFA' />
  </svg>
);

const Memo = memo(Line4Icon);
export { Memo as Line4Icon };
