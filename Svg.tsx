import * as React from 'react';

const SvgAdd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="add_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <path fill="#C4C4C4" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#add_svg__a)">
      <path
        d="M10 15.625A.606.606 0 0 1 9.375 15v-4.375H5A.605.605 0 0 1 4.375 10 .608.608 0 0 1 5 9.375h4.375V5A.605.605 0 0 1 10 4.375a.608.608 0 0 1 .625.625v4.375H15c.18 0 .33.059.448.177a.61.61 0 0 1 .177.448.606.606 0 0 1-.625.625h-4.375V15c0 .18-.059.33-.177.448a.609.609 0 0 1-.448.177Z"
        fill="red"
      />
    </g>
  </svg>
);

export default SvgAdd;
