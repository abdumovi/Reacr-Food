import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className='Search'>
            <div className='search__titles'>
                <h2 className='searech__title'>Jaegar Resto</h2>
                <p className='search__text'>Tuesday, 2 Feb 2021</p>
            </div>
            <form>
                <input className='search__input' type="search" />
            </form>
        </div>
    );
};

export default Search;