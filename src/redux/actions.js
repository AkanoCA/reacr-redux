import { PANEL_HEIGHT, PANEL_VISIBLE, PANEL_WIDTH } from "./types";

export function changePanelWidth(options) {
    return {
        type: PANEL_WIDTH,
        payload: options
    }
}

export function changePanelHeight(options) {
    return {
        type: PANEL_HEIGHT,
        payload: options
    }
}

export function changePanelVisible(options) {
    return {
        type: PANEL_VISIBLE,
        payload: options
    }
}