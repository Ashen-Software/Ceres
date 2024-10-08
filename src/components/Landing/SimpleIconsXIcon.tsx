import { memo, SVGProps } from 'react';

const SimpleIconsXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.901 1.153H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.154H7.594L12.837 8.086L18.901 1.153ZM17.61 20.644H19.649L6.486 3.24H4.298L17.61 20.644Z'
      fill='#C9AACC'
    />
  </svg>
);

const Memo = memo(SimpleIconsXIcon);
export { Memo as SimpleIconsXIcon };
