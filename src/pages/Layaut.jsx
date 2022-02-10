import React from 'react';
import './Layaut.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../container';

const Layaut = () => {
    return (
        <>
            <Header />
            <main className='mainElement'>
                <Outlet />
            </main>

        </>
    )
}

export { Layaut }