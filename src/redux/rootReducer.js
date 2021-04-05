import { ITEM_HEIGHT, ITEM_VISIBLE, ITEM_WIDTH, ITEM_CAPTION, ITEM_NEW } from "./types"

const initialState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 200,
        height: 100,
        visible: true
      },
      content: [
        {
          type: 'button',
          props: {
            caption: 'Accept',
            width: 100,
            height: 50,
            visible: true
          }
        },
      ]
    },
    {
      type: 'panel',
      props: {
        width: 300,
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
  ]
}

export const rootReducer = (state = initialState, action) => {
  let options = action.payload;
  let type = action.type;

  switch (type) {
    case ITEM_WIDTH:
      if (state.content[options.id].type == 'label') return state;
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

    case ITEM_HEIGHT:
      if (state.content[options.id].type == 'label') return state;
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
    case ITEM_VISIBLE:
      return {
        ...state,
        content: state.content.map((item, index) => {
          if (index != options.id) return item
          else return {
            ...item,
            props: {
              ...item.props,
              visible: item.props.height = options.visible
            }
          }
        })

      }
    case ITEM_CAPTION:
      if (state.content[options.id].type == 'panel') return state;
      return {
        ...state,
        content: state.content.map((item, index) => {
          if (index != options.id) return item
          else return {
            ...item,
            props: {
              ...item.props,
              caption: item.props.height = options.caption
            }
          }
        })

      }
    case ITEM_NEW:
      return {
        ...state,
        content: state.content.concat(options.item)
      }

    default:
      return state
  }
}