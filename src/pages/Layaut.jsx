import React from 'react';
import './Layaut.css';
import { Outlet, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Header, Top, Main, Right } from '../container';

const Layaut = () => {
    return (
        <>

            <Header />

            <main className='mainElement'>
                <section className='mainSection'>
                    <Top />
                    <Main />
                    <Outlet />
                </section>
                <Routes>
                    <Route path='/' element={<Right />} />
                    <Route path='dashboard' element={<Right />} />
                </Routes>
            </main>

        </>
    )
}

export { Layaut }