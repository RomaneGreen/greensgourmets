
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { isLoading: true, errMess: null, comments:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}
          
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          let comment = action.payload;
          comment.date = new Date().toISOString();
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
  }; 