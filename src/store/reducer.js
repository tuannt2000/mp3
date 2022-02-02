import { SET_TITLE } from './constants'

const initState = {
    title: '',
    playlist: [
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
    ]
}

function reducer(state,action) {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export {initState}
export default reducer