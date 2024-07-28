import React from 'react';

// Mui
import { Avatar, Box, ButtonBase, Stack } from '@mui/material';

// Icons
import HomeIcon from '../../../assets/icons/home';
import SearchIcon from '../../../assets/icons/search';
import PlusIcon from '../../../assets/icons/plus';
import ReelsIcon from '../../../assets/icons/reels';

// ---------------------------------|| BOTTOM NAV - LAYOUT || ----------------------------------------------------------

const BottomNavigation: React.FC = () => {
  // States
  const navList = [<HomeIcon />, <SearchIcon />, <PlusIcon width={22} height={22} />, <ReelsIcon />];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.drawer + 5,
        background: '#fff'
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
        p="17px 18px"
        sx={{ boxShadow: '0px -0.976px 0px 0px #E0E0E0' }}
      >
        {navList.map((icon, i) => (
          <ButtonBase disableRipple key={i}>
            {icon}
          </ButtonBase>
        ))}

        <Avatar sx={{ width: 22, height: 22 }} />
      </Stack>
    </Box>
  );
};

export default BottomNavigation;
