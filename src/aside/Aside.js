import React, { useState, useEffect } from 'react';
import Brand from './layouts/brand/Brand';
import Main from './layouts/main/Main';

function Aside() {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <div className="zm-sidebar">
            <Brand/>
            <Main/>
        </div>
    )
}

export default Aside;