import React, { useCallback } from 'react';

// Mui
import { Avatar, Box, ButtonBase, Card, Stack, Typography } from '@mui/material';

// Lazy Image
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Redux
import { useDispatch } from 'react-redux';
import { dislikeReel, likeReel } from '../../../store/reducers/reelsReducer/actions.ts';

// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LikedIcon from '../../../assets/icons/liked';
import HeartIcon from '../../../assets/icons/heart';
import CommentIcon from '../../../assets/icons/commentIcon';
import ShareIcon from '../../../assets/icons/share';
import BookmarkIcon from '../../../assets/icons/bookmarkIcon';

// Interfaces
import { Reel } from '../../../store/reducers/reelsReducer/type.ts';

interface PostCardProps extends Reel {
  handleOpenComments: (id: number) => void;
}

// ---------------------------------------------------------------------------------------------------------------------

function Image({ src }: { src: string }) {
  return (
    <>
      <LazyLoadImage alt="image" className="gallery-img" effect="blur" src={src} width="100%" />
    </>
  );
}

const PostCard: React.FC<PostCardProps> = ({ id, avatar, username, imageUrl, likes, is_liked, caption, comments, handleOpenComments }) => {
  // Store Dispatch
  const dispatch = useDispatch();

  // Methods
  const handleLikeReel = useCallback((reelId: number, isLiked: boolean) => {
    if (isLiked) dispatch(dislikeReel(reelId));
    else dispatch(likeReel(reelId));
  }, []);

  return (
    <Card sx={{ width: '100%' }} elevation={0}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" px="8px">
        <Stack direction="row" alignItems="center" gap="12px">
          <Avatar src={avatar} sx={{ width: 31, height: 31 }} />

          <Typography fontSize={12} fontWeight={500}>
            {username}
          </Typography>
        </Stack>

        <ButtonBase disableRipple>
          <MoreVertIcon fontSize="small" />
        </ButtonBase>
      </Stack>

      <Box pt={'6px'}>
        <Image src={imageUrl} />
      </Box>

      <Stack spacing="6px" p="8px">
        <Stack direction="row" justifyContent="space-between" alignItems="center" pb="4px">
          <Stack direction="row" alignItems="center" spacing="12px">
            <ButtonBase onClick={() => handleLikeReel(id, is_liked)} disableRipple>
              {is_liked ? <LikedIcon width={24} color="red" /> : <HeartIcon width={24} />}
            </ButtonBase>
            <ButtonBase disableRipple onClick={() => handleOpenComments(id)}>
              <CommentIcon width={24} />
            </ButtonBase>
            <ButtonBase disableRipple>
              <ShareIcon width={24} />
            </ButtonBase>
          </Stack>

          <ButtonBase disableRipple>
            <BookmarkIcon width={24} />
          </ButtonBase>
        </Stack>

        <Typography fontSize="12px" fontWeight={400} color="#000">
          {Number(likes).toLocaleString()} likes
        </Typography>

        <Typography fontSize="12px" color="#000">
          {caption}
        </Typography>
        {comments.length > 0 && (
          <Typography fontSize="11px" color="rgba(0, 0, 0, 0.40)">
            View all {comments.length} comments
          </Typography>
        )}

        <Stack direction="row" alignItems="center" spacing="12px">
          <Avatar src={'https://randomuser.me/api/portraits/men/21.jpg'} sx={{ width: 25, height: 25 }} />

          <Box onClick={() => handleOpenComments(id)}>
            <Typography fontSize={12} color="rgba(0, 0, 0, 0.40)">
              Add a comment
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default PostCard;
