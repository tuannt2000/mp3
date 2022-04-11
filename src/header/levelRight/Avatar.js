function Avatar(){
    return (
        <div
            style={
                {
                    position: 'relative'
                }
            }    
        >
            <div className="zm-avatar-frame">
                <button className="zm-btn button">
                    <figure className="image is-38x38 is-rounded">
                        <img src="https://s120-ava-talk.zmdcdn.me/3/0/2/7/1/120/43a83f81f0b95cac9523c6b74f31cf78.jpg" alt="" />
                    </figure>
                </button>
            </div>
        </div>
    )
}

export default Avatar;