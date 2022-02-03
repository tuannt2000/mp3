import './AddPlaylist.css'

import { useStore,actions } from '../../../store'

function AddPlaylist() {
    const [state,dispatch] = useStore();

    const handleClick = () => {
        dispatch(actions.setShowPlaylist())
    }

    return (
        <div className="add-playlist-sidebar">
            <button className="zm-btn button" onClick={handleClick}>
                <img src={window.location.origin + '/images/plus.svg'} alt="" />
                <span>Tạo playlist mới</span>
            </button>
        </div>
    )
}

export default AddPlaylist;