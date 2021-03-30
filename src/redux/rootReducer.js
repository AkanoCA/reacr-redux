import { CHANGE_BUTTON, CHANGE_LABEL, CHANGE_PANEL } from "./types"

let initialState = [
  {
    type: 'panel',
    props: {
      width: 500,
      height: 200,
      visible: true
    }
  },
  {
    type: 'label',
    props: {
      caption: 'test',
      visible: true
    }
  },
  {
    type: 'button',
    props: {
      caption: 'Accept',
      width: 500,
      height: 200,
      visible: true
    }
  },
]


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PANEL:
      return {
      }
    case CHANGE_LABEL:
      return {
      }
    case CHANGE_BUTTON:
      return {
      }
    default:
      return state
  }

}