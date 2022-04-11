function Form(){
    return(
        <form className="search">
            <div className="search__container">
                <button className="zm-btn button">
                    <i className="icon far fa-search"></i>
                </button>
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        className="form-control z-input-placeholder" 
                        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form;