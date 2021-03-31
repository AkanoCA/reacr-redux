// import { combineReducers } from "redux"
// import panelReducer from './panelReducer';

import { PANEL_HEIGHT, PANEL_WIDTH } from "./types"

// const initialState = {
//   content: [
//     {
//       type: 'panel',
//       props: {
//         width: 200,
//         height: 100,
//         visible: true
//       }
//     },
//     {
//       type: 'label',
//       props: {
//         caption: 'test',
//         visible: true
//       }
//     },
//     {
//       type: 'button',
//       props: {
//         caption: 'Accept',
//         width: 200,
//         height: 100,
//         visible: true
//       }
//     },
//   ]
// }

// export const rootReducer = combineReducers({
//   panelReducer,

// })


const initialState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 200,
        height: 100,
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
        width: 100,
        height: 50,
        visible: true
      }
    },
    {
      type: 'button',
      props: {
        caption: 'Accept',
        width: 150,
        height: 50,
        visible: true
      }
    },
  ]
}

export const rootReducer = (state = initialState, action) => {
  let options = action.payload;
  let type = action.type;

  switch (type) {
    case PANEL_WIDTH:
      return {
        ...state,
        content: state.content.map((item, index) => {
          if (index != options.id) return item
          else return {
            ...item,
            props: {
              ...item.props,
              width: item.props.width = options.width
            }
          }
        })
      }

    case PANEL_HEIGHT:
      return {
        ...state,
        content: state.content.map((item, index) => {
          if (index != options.id) return item
          else return {
            ...item,
            props: {
              ...item.props,
              height: item.props.height = options.height
            }
          }
        })
      }

    default:
      return state
  }
}