import './AddPlaylist.css'

function AddPlaylist() {
    return (
        <div className="add-playlist-sidebar">
            <button className="zm-btn button">
                <img src={window.location.origin + '/images/plus.svg'} alt="" />
                <span>Tạo playlist mới</span>
            </button>
        </div>
    )
}

export default AddPlaylist;