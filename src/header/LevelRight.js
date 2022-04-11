import Topic from './levelRight/Topic'
import Vip from './levelRight/Vip'
import Upload from './levelRight/Upload'
import Setting from './levelRight/Setting';
import Avatar from './levelRight/Avatar';

function LevelRight(){
    return (
        <div className="level-right">
            <Topic />
            <Vip />
            <input 
                id="up-button" 
                type="file" 
                accept="audio/*" 
                style={
                    {
                        display: 'none',
                    }
                } 
            />
            <Upload />
            <Setting />
            <Avatar />
        </div>
    );
}

export default LevelRight;