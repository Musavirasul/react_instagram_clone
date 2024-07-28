// Mock
import mockReels from '../../../mock/home.json';

import { AnyAction } from 'redux';

// Types
import { ADD_COMMENT, DISLIKE_COMMENT, DISLIKE_REEL, LIKE_COMMENT, LIKE_REEL, ReelAction, ReelState } from './type.ts';

const initialState: ReelState = {
  items: mockReels
};

export default function reelsReducer(state = initialState, action: ReelAction | AnyAction): ReelState {
  switch (action.type) {
    case LIKE_REEL:
      return {
        ...state,
        items: state.items.map((reel) => (reel.id === action.payload ? { ...reel, likes: reel.likes + 1, is_liked: true } : reel))
      };
    case DISLIKE_REEL:
      return {
        ...state,
        items: state.items.map((reel) => (reel.id === action.payload ? { ...reel, likes: reel.likes - 1, is_liked: false } : reel))
      };
    case ADD_COMMENT:
      return {
        ...state,
        items: state.items.map((reel) =>
          reel.id === action.payload.reelId ? { ...reel, comments: [...reel.comments, action.payload.comment] } : reel
        )
      };
    case LIKE_COMMENT:
      return {
        ...state,
        items: state.items.map((reel) =>
          reel.id === action.payload.reelId
            ? {
                ...reel,
                comments: reel.comments.map((comment) =>
                  comment.id === action.payload.commentId ? { ...comment, likes: comment.likes + 1, is_liked: true } : comment
                )
              }
            : reel
        )
      };
    case DISLIKE_COMMENT:
      return {
        ...state,
        items: state.items.map((reel) =>
          reel.id === action.payload.reelId
            ? {
                ...reel,
                comments: reel.comments.map((comment) =>
                  comment.id === action.payload.commentId ? { ...comment, likes: comment.likes - 1, is_liked: false } : comment
                )
              }
            : reel
        )
      };

    default:
      return state;
  }
}
