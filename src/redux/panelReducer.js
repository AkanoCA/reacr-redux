import { PANEL_HEIGHT, PANEL_VISIBLE, PANEL_WIDTH } from "./types";

const initialState = {
    width: 200,
    height: 300,
    visible: true
}

const panelReducer = (state = initialState, action) => {
    switch (action.type) {
        case PANEL_WIDTH:
            return {
                ...state,
                width: action.payload,
            }
        case PANEL_HEIGHT:
            return {
                ...state,
                height: action.payload
            }
        case PANEL_VISIBLE:
            return {
                ...state,
                visible: action.payload
            }
        default:
            return { ...state }
    }
}

export default panelReducer