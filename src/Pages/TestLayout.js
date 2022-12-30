import React from 'react';
import { Outlet } from 'react-router-dom';


const TestLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default TestLayout;