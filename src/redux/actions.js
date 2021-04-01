import { ITEM_HEIGHT, ITEM_VISIBLE, ITEM_WIDTH, ITEM_CAPTION, ITEM_NEW } from "./types";

export function changeWidth(options) {
    return {
        type: ITEM_WIDTH,
        payload: options
    }
}

export function changeHeight(options) {
    return {
        type: ITEM_HEIGHT,
        payload: options
    }
}

export function changeVisible(options) {
    return {
        type: ITEM_VISIBLE,
        payload: options
    }
}

export function changeCaption(options) {
    return {
        type: ITEM_CAPTION,
        payload: options
    }
}

export function newItem(options) {
    return {
        type: ITEM_NEW,
        payload: options
    }
}