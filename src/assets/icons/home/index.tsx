import React, { SVGProps } from 'react';

// -----------------------------------------|| HOME - ICONS || ---------------------------------------------------------

const HomeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
      <path
        fill="#333"
        stroke="#333"
        strokeWidth={1.705}
        d="m10.618 2.67.039.038-.04-.039Zm0 0-.04.038h.001l.039-.039ZM2.73 10.72l7.887-7.973 7.887 7.972c.235.237.366.557.366.894v6.225a.41.41 0 0 1-.401.415h-4.545a.393.393 0 0 1-.385-.398V14.09c0-1.617-1.3-2.944-2.922-2.944s-2.922 1.327-2.922 2.944v3.765a.393.393 0 0 1-.385.398H2.766a.41.41 0 0 1-.401-.415v-6.225c0-.337.131-.657.366-.894Z"
      />
    </svg>
  );
};

export default HomeIcon;
