import React, { useState, useEffect } from 'react';

function Main() {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <div>
            Đây là main
        </div>
    )
}

export default Main;