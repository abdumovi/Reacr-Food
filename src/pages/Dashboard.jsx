import React from 'react';
import { Search } from '../components';
import { Main } from '../container';

const Dashboard = () => {
    return (
        <div>
           <Search text title='Dashboard' />
           <Main/>
        </div>
    )
}

export {Dashboard}