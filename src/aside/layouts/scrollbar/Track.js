import { forwardRef } from 'react';

import './Track.css'

function Track(props,ref) {
    return (
        <div 
            className="track-vertical"
            style={
                {
                    position: 'absolute',
                    width: 4, 
                    transition: 'opacity 200ms ease 0s',
                    opacity: 0,
                    right: 2,
                    top: 2,
                    bottom: 2,
                    zIndex: 100
                }
            }
        >
            <div 
                ref={ref}
                className="thumb-vertical"
                style={
                    {
                        position: 'relative',
                        display: 'block',
                        width: '100%', 
                        height: 156,
                        transform: 'translateY(0px)'
                    }
                }
            >

            </div> 
        </div>
    )
}

export default forwardRef(Track);