import React, { SVGProps } from 'react';

// -----------------------------------------|| PLUS - ICONS || ---------------------------------------------------------

const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.583 2.75H5.417A2.667 2.667 0 0 0 2.75 5.417v9.166a2.667 2.667 0 0 0 2.667 2.667h9.166a2.667 2.667 0 0 0 2.667-2.667V5.417a2.667 2.667 0 0 0-2.667-2.667Zm-9.166-1.5A4.167 4.167 0 0 0 1.25 5.417v9.166a4.167 4.167 0 0 0 4.167 4.167h9.166a4.167 4.167 0 0 0 4.167-4.167V5.417a4.167 4.167 0 0 0-4.167-4.167H5.417Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 5.469a.596.596 0 0 0-.596.596v3.34h-3.34a.596.596 0 1 0 0 1.19h3.34v3.34a.596.596 0 1 0 1.192 0v-3.34h3.34a.596.596 0 1 0 0-1.19h-3.34v-3.34A.596.596 0 0 0 10 5.469Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PlusIcon;
