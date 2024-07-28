import React, { SVGProps } from 'react';

// -----------------------------------------|| SEARCH - ICONS || ---------------------------------------------------------

const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
      <path
        fill="#333"
        fillRule="evenodd"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.852}
        d="M19.876 19.315a.42.42 0 0 0 0-.596l-3.731-3.72a7.926 7.926 0 0 0 2.05-5.32c0-4.401-3.582-7.972-7.996-7.972-4.415 0-7.996 3.57-7.996 7.972 0 4.4 3.581 7.97 7.996 7.97 2.062 0 3.93-.784 5.348-2.06l3.736 3.725a.42.42 0 0 0 .593.001ZM3.045 9.68c0-3.932 3.21-7.133 7.154-7.133 3.943 0 7.154 3.201 7.154 7.133 0 3.93-3.211 7.132-7.154 7.132S3.045 13.61 3.045 9.679Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SearchIcon;
