export const LIKE_REEL = 'LIKE_REEL';
export const DISLIKE_REEL = 'DISLIKE_REEL';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const DISLIKE_COMMENT = 'DISLIKE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

export interface Comment {
  id: number;
  username: string;
  text: string;
  avatar: string;
  likes: number;
  is_liked: boolean;
}

export interface Reel {
  id: number;
  username: string;
  avatar: string;
  imageUrl: string;
  is_liked: boolean;
  caption: string;
  likes: number;
  comments: Comment[];
}

export interface ReelState {
  items: Reel[];
}

interface LikeReelAction {
  type: typeof LIKE_REEL;
  payload: number;
}

interface DislikeReelAction {
  type: typeof DISLIKE_REEL;
  payload: number;
}

interface LikeCommentAction {
  type: typeof LIKE_COMMENT;
  payload: {
    reelId: number;
    commentId: number;
  };
}

interface DislikeCommentAction {
  type: typeof DISLIKE_COMMENT;
  payload: {
    reelId: number;
    commentId: number;
  };
}

interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: {
    reelId: number;
    comment: Comment;
  };
}

export type ReelAction = LikeReelAction | DislikeReelAction | LikeCommentAction | DislikeCommentAction | AddCommentAction;
