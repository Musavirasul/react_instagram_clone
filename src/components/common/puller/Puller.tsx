import { styled } from '@mui/material';

// ----------------------------------------|| PULLER - COMMON ||--------------------------------------------------------

const Puller = styled('div')(({ theme }) => ({
  width: 50,
  height: 6,
  backgroundColor: theme.palette.divider,
  borderRadius: 3,
  position: 'absolute',
  top: 15,
  left: 'calc(50% - 25px)'
}));

export default Puller;
