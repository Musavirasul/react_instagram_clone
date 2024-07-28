import React, { SVGProps } from 'react';

// -----------------------------------------|| REELS - ICONS || ---------------------------------------------------------

const ReelsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
      <path
        fill="#333"
        fillRule="evenodd"
        d="m7.89 3.268 2.307 2.884-.116.065h3.833l-2.359-2.949H7.889Zm10.655 2.949h-2.828l.116-.065-2.307-2.884h2.244a2.775 2.775 0 0 1 2.775 2.775v.174Zm-10.268 0L5.93 3.284a2.775 2.775 0 0 0-2.476 2.76v.173h4.822Zm-4.822 9.366V7.778h15.09v7.805a2.775 2.775 0 0 1-2.775 2.775H6.23a2.775 2.775 0 0 1-2.775-2.775ZM6.23 1.707a4.336 4.336 0 0 0-4.336 4.336v9.54a4.336 4.336 0 0 0 4.336 4.336h9.54a4.336 4.336 0 0 0 4.336-4.336v-9.54a4.336 4.336 0 0 0-4.336-4.336H6.23Zm7.588 11.216a.434.434 0 0 0 0-.751L9.266 9.543a.434.434 0 0 0-.65.376v5.257c0 .334.36.542.65.376l4.552-2.63Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ReelsIcon;
