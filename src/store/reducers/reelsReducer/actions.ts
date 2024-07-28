import { LIKE_REEL, DISLIKE_REEL, LIKE_COMMENT, DISLIKE_COMMENT, ADD_COMMENT, Comment } from './type.ts';

export const likeReel = (reelId: number) => ({
  type: LIKE_REEL,
  payload: reelId
});

export const dislikeReel = (reelId: number) => ({
  type: DISLIKE_REEL,
  payload: reelId
});

export const likeComment = (reelId: number, commentId: number) => ({
  type: LIKE_COMMENT,
  payload: { reelId, commentId }
});

export const dislikeComment = (reelId: number, commentId: number) => ({
  type: DISLIKE_COMMENT,
  payload: { reelId, commentId }
});

export const addComment = (reelId: number, comment: Comment) => ({
  type: ADD_COMMENT,
  payload: { reelId, comment }
});
