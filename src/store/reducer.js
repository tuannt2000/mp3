import { 
    SET_TITLE,
    SET_PLAYLIST,
    ADD_PLAYLIST,
    SET_POSITION_MOUSE,
    SET_SHOW_COOL_PORTAL,
    SET_SHOW_PLAYLIST,
    SET_SHOW_CHILD_MENU_PLAYLIST,
    SET_SHOW_MENU_PLAYLIST,
} from './constants'

const initState = {
    title: '',
    playlists: [
        {
            id : 1,
            title : 'Việt nam',
            link : 'playlist/viet-nam',
            documentTitle : 'Việt nam | Album 320 lossless'
        },
        {
            id : 2,
            title : 'Nhật',
            link : 'playlist/nhat',
            documentTitle : 'Nhật | Album 320 lossless' 
        }
    ],
    playlist: '',
    positionMousePointerX : 0,
    positionMousePointerY : 0,
    showCoolPortal: false,
    showPlaylist: false,
    showChildMenuPlaylist: false,
    setShowMenuPlaylist: false
}

function reducer(state,action) {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        case ADD_PLAYLIST:
            return {
                ...state,
                playlists: [...state.playlists,{
                    id : state.playlists.length + 1,
                    title : action.payload,
                    link : 'playlist/' + action.payload,
                    documentTitle: action.payload + ' | Album 320 lossless'
                }]
            }
        case SET_POSITION_MOUSE:
            return{
                ...state,
                positionMousePointerX : action.pointerX,
                positionMousePointerY : action.pointerY
            }
        case SET_SHOW_COOL_PORTAL:
            return {
                ...state,
                showCoolPortal: action.payload
            }
        case SET_SHOW_PLAYLIST:
            return {
                ...state,
                showPlaylist: !state.showPlaylist
            }
        case SET_SHOW_CHILD_MENU_PLAYLIST:
            return {
                ...state,
                showChildMenuPlaylist: !state.showChildMenuPlaylist
            }
        case SET_SHOW_MENU_PLAYLIST:
            return {
                ...state,
                showMenuPlaylist: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export {initState}
export default reducer