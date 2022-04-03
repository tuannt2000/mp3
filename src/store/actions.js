import { 
    SET_TITLE,
    SET_PLAYLIST,
    ADD_PLAYLIST,
    SET_POSITION_MOUSE,
    SET_SHOW_COOL_PORTAL,
    SET_SHOW_PLAYLIST,
    SET_SHOW_CHILD_MENU_PLAYLIST,
    SET_SHOW_MENU_PLAYLIST
} from './constants'

export const setTitle = payload => ({
    type: SET_TITLE,
    payload
})

export const setPlaylist = payload => ({
    type: SET_PLAYLIST,
    payload
})

export const addPlaylist = payload => ({
    type: ADD_PLAYLIST,
    payload
})

export const setPositionMouse = (pointerX,pointerY) => ({
    type: SET_POSITION_MOUSE,
    pointerX,
    pointerY
})

export const setShowCoolPortal = payload => ({
    type: SET_SHOW_COOL_PORTAL,
    payload
})

export const setShowPlaylist = () => ({
    type: SET_SHOW_PLAYLIST,
})

export const setShowChildMenuPlaylist = () => ({
    type: SET_SHOW_CHILD_MENU_PLAYLIST
})

export const setShowMenuPlaylist = payload => ({
    type: SET_SHOW_MENU_PLAYLIST,
    payload
})