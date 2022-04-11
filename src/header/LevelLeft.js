import Form from './levelLeft/Form'

function LevelLeft(){
    return (
        <div className="level-left">
            <button className="zm-btn disabled button">
                <i className="icon ic-back fal fa-arrow-left"></i>
            </button>
            <button className="zm-btn disabled button">
                <i className="icon ic-forward fal fa-arrow-right"></i>
            </button>
            <Form />
        </div>
    );
}

export default LevelLeft;