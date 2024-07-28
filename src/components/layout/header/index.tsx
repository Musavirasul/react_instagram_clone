import React from 'react';

// Mui
import { AppBar, Stack, Box, ButtonBase } from '@mui/material';

// Icons
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HeartIcon from '../../../assets/icons/heart';
import ShareIcon from '../../../assets/icons/share';

// Images
import InstagramLogo from '../../../assets/images/logo/Instagram_logo.png';

// -------------------------------------|| HEADER - LAYOUT ||-----------------------------------------------------------

const Header: React.FC = () => {
  // States
  const actions = [<HeartIcon width={20} />, <ShareIcon width={20} />];

  return (
    <AppBar position="sticky" elevation={0} sx={{ minhHeight: 46, background: '#fff', top: 0 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" p={'5px 8px'}>
        {/* Logo */}
        <Stack direction="row" alignItems="center" spacing={0}>
          <Box component="img" src={InstagramLogo} width={100} height={36} alt="logo" />
          <ExpandMoreRoundedIcon />
        </Stack>

        {/* Actions */}
        <Stack direction="row" alignItems="center" spacing="16px">
          {actions.map((item, i) => (
            <ButtonBase key={i} disableRipple>
              {item}
            </ButtonBase>
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Header;
