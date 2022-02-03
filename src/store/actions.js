import { 
    SET_TITLE,
    SET_PLAYLIST,
    ADD_PLAYLIST,
    SET_SHOW_PLAYLIST
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

export const setShowPlaylist = () => ({
    type: SET_SHOW_PLAYLIST
})