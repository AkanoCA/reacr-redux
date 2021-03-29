import { CHANGE_PANEL, CHANGE_LABEL, CHANGE_BUTTON } from "./types";

export function changePanel(options) {
    return {
        type: CHANGE_PANEL,
        payload: options
    }
}
export function changeLabel(options) {
    return {
        type: CHANGE_LABEL,
        payload: options
    }
}
export function changeButton(options) {
    return {
        type: CHANGE_BUTTON,
        payload: options
    }
}