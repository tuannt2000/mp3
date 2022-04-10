import { useStore,actions } from '../../../store'

function AddPlaylist() {
    const [state,dispatch] = useStore();

    const handleClick = () => {
        dispatch(actions.setShowCoolPortal(true));
        dispatch(actions.setShowPlaylist())
    }

    return (
        <div className="add-playlist-sidebar">
            <button className="zm-btn button" onClick={handleClick}>
                <i className="fas fa-plus"></i>
                <span>Tạo playlist mới</span>
            </button>
        </div>
    )
}

export default AddPlaylist;