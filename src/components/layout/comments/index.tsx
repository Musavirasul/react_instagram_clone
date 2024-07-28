import React, { useEffect, useState } from 'react';

// Mui
import { SwipeableDrawer, Typography, Stack, Avatar, ButtonBase, Box } from '@mui/material';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { likeComment, dislikeComment, addComment } from '../../../store/reducers/reelsReducer/actions.ts';

// Components
import Puller from '../../common/puller/Puller.tsx';

// Icons
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HeartIcon from '../../../assets/icons/heart';
import LikedIcon from '../../../assets/icons/liked';

// Interfaces
import { RootState } from '../../../store/store.ts';

import { Comment } from '../../../store/reducers/reelsReducer/type.ts';

interface ICommentsProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reelId: number | undefined;
}

// --------------------------------------|| COMMENTS - LAYOUT ||--------------------------------------------------------

const Comments: React.FC<ICommentsProps> = ({ open, setOpen, reelId }) => {
  // Store
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state.reels.items);

  // States
  const [commentsList, setCommentsList] = useState<Comment[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (reelId) {
      const comments = list.find((item) => item.id === reelId);

      if (comments) {
        setCommentsList(comments.comments);
      }
    }
  }, [list, reelId]);

  // Methods
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleLikeComment = (id: number, isLiked: boolean) => {
    if (!reelId) return;
    if (isLiked) dispatch(dislikeComment(reelId, id));
    else dispatch(likeComment(reelId, id));
  };

  const handleAddComment = () => {
    if (!inputValue) return;
    dispatch(
      addComment(reelId!, {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        text: inputValue,
        is_liked: false,
        likes: 0,
        username: 'Rasul_m',
        id: 21
      })
    );
    setInputValue('');
  };

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      anchor="bottom"
      swipeAreaWidth={56}
      ModalProps={{
        keepMounted: true
      }}
      PaperProps={{
        sx: {
          height: '95%',
          borderRadius: '0.75rem 0.75rem 0 0',
          background: (theme) => theme.palette.background.paper
        }
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 400
      }}
    >
      <Box pt={'1.25rem'}>
        <Puller />
      </Box>
      <Typography fontSize={12} textAlign="center" pt={1}>
        Comments
      </Typography>

      <Box height="90%" overflow="auto">
        <Stack mt={1} spacing="15px" p={'1.25rem'}>
          {commentsList.map((comment, i) => (
            <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar src={comment.avatar} sx={{ width: 30, height: 30 }} />
                <Stack>
                  <Typography fontSize={12}>{comment.username}</Typography>
                  <Typography fontSize={12}>{comment.text}</Typography>

                  <ButtonBase disableRipple sx={{ justifyContent: 'start' }}>
                    <Typography fontSize={12}>Reply</Typography>
                  </ButtonBase>
                </Stack>
              </Stack>

              <Stack spacing={0.5} alignItems="center">
                <ButtonBase disableRipple onClick={() => handleLikeComment(comment.id, comment.is_liked)}>
                  {comment.is_liked ? <LikedIcon width={18} color="red" /> : <HeartIcon width={18} />}
                </ButtonBase>
                <Typography fontSize={10}>{comment.likes}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Stack direction="row" alignItems="center" spacing={1} p="14px 10px" sx={{ boxShadow: '0px -0.976px 0px 0px #E0E0E0' }}>
        <Avatar sx={{ width: 30, height: 30 }} />

        <Box
          component="input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a comment"
          sx={{ width: '100%', height: '100%', border: 'none' }}
        />

        <ButtonBase disableRipple onClick={handleAddComment} disabled={!inputValue}>
          <SendRoundedIcon />
        </ButtonBase>
      </Stack>
    </SwipeableDrawer>
  );
};

export default Comments;
