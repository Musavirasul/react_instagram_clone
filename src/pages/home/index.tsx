import React, { useCallback, useState } from 'react';

// Mui
import { Stack } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

// Components
import PostCard from '../../components/pages/home/postCard.tsx';
import Comments from '../../components/layout/comments';

// Types
import { RootState } from '../../store/store.ts';

// ---------------------------------------|| HOME - PAGES ||------------------------------------------------------------

const Home: React.FC = () => {
  // Store
  const list = useSelector((state: RootState) => state.reels.items);

  // States
  const [openComments, setOpenComments] = useState<boolean>(false);
  const [reelId, setReelId] = useState<number>();

  // Methods

  const handleOpenComments = useCallback((reel_id: number) => {
    setReelId(reel_id);
    setOpenComments(true);
  }, []);

  return (
    <>
      <Stack spacing="16px" mt={'16px'}>
        {list.map((reel, i) => (
          <PostCard key={i} handleOpenComments={handleOpenComments} {...reel} />
        ))}
      </Stack>

      <Comments open={openComments} reelId={reelId} setOpen={setOpenComments} />
    </>
  );
};

export default Home;
