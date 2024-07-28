import React, { ReactNode } from 'react';

// Mui
import { ThemeProvider, CssBaseline } from '@mui/material';

// types
type ThemeCustomizationProps = {
  children: ReactNode;
};

// --------------------------------|| THEME CONFIG ||-------------------------------------------------------------------

const ThemeCustomization: React.FC<ThemeCustomizationProps> = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeCustomization;
