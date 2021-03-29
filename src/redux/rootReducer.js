import { combineReducers } from 'redux';
import { CHANGE_BUTTON, CHANGE_LABEL, CHANGE_PANEL } from "./types"

let initialState = {
  panel: {
    width: 200,
    height: 100,
    isVisible: true
  },
  label: {
    caption: 'test',
    isVisible: true
  },
  button: {
    width: 100,
    height: 50,
    caption: 'Accept',
    isVisible: true
  }
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PANEL:
      return {
        ...state,
        panel: {
          width: action.payload.width,
          height: action.payload.height,
          isVisible: action.payload.visible,
        }
      }
    case CHANGE_LABEL:
      return {
        ...state,
        label: {
          caption: action.payload.caption,
          isVisible: action.payload.visible,
        }
      }
    case CHANGE_BUTTON:
      return {
        ...state,
        button: {
          width: action.payload.width,
          height: action.payload.height,
          caption: action.payload.caption,
          isVisible: action.payload.visible,
        }
      }
    default:
      return state
  }

}