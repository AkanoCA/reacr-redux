import { CHANGE_STYLE } from "./types";

export function changeStyle(options) {
    return {
        type: CHANGE_STYLE,
        payload: options
    }
}