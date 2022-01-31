import { SET_TITLE } from './constants'

const initState = {
    title: '',
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