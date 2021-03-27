import { CHANGE_STYLE } from "./types"

const initialState = {
  width: 200,
  height: 100,
  isVisible: true
}

export const panelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STYLE:
      return {
        ...state,
        width: action.payload,
        height: action.payload,
        // isVisible: state.isVisible.concat(action.payload)
      }
    default:
      return state
  }

}