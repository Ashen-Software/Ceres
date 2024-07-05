import { memo, SVGProps } from 'react';

const VuesaxLinearArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.6 7.45833L11.1667 12.8917C10.525 13.5333 9.475 13.5333 8.83333 12.8917L3.4 7.45833'
      stroke='#49537A'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VuesaxLinearArrowDownIcon);
export { Memo as VuesaxLinearArrowDownIcon };
