import React, { useState,useEffect,useRef } from 'react';

import { useStore,actions } from '../../store'

import './AddPlaylist.css'

function AddPlaylist() {
    const [state, dispatch] = useStore();

    const [showButton, setShowButton] = useState(false)

    const buttonRef = useRef();

    useEffect(() => {
        showButton ? buttonRef.current.disabled = false : buttonRef.current.disabled = true
    }, [showButton]);

    const handleShowButton = (valueInput) => {
        valueInput !== '' ? setShowButton(true) : setShowButton(false)
        dispatch(actions.setPlaylist(valueInput))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.addPlaylist(state.playlist));
        dispatch(actions.setPlaylist(''));
        dispatch(actions.setShowPlaylist());
        dispatch(actions.setShowCoolPortal(false));
    }

    const handleClose = () => {
        dispatch(actions.setShowPlaylist());
        dispatch(actions.setShowCoolPortal(false));
    }

    return (
        <div className="zm-portal-modal">
            <div className="modal is-active">
                <div className="modal-background">
                    <div className="modal-content">
                        <div className="form-playlist-content">
                            <button 
                                className="zm-btn zm-tooltip-btn close-btn is-hover-circle button"
                                onClick={handleClose}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                            <h3 className="title">Tạo playlist mới</h3>
                            <form onSubmit={e => handleSubmit(e)}>
                                <input 
                                    className="input"
                                    placeholder="Nhập tên playlist"
                                    onInput={e => handleShowButton(e.target.value)}
                                    value={state.playlist}
                                />
                                <button 
                                    type="submit"
                                    disabled 
                                    className="zm-btn mar-t-20 is-outlined active is-fullwidth is-upper button"
                                    ref={buttonRef}
                                >
                                    <span>Tạo mới</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlaylist;