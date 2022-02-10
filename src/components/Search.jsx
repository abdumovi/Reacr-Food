import React from 'react';
import './Search.css';
import { HomeContext } from '../contexts/HomeContext';

const Search = (props) => {
    const {search,setSearch} = React.useContext(HomeContext);
    
    return (
        <div className='Search'>
            <div className='search__titles'>
                <h2 className='searech__title'>{props.title}</h2>
                {props.text && <p className='search__text'>Tuesday, 2 Feb 2021</p>
}
            </div>
            {props.search &&
                <form className='search__form'>
                    <input 
                    onChange={(e)=>setSearch(e.target.value)} 
                    value={search} className='search__input' 
                    placeholder='Search for food, coffe, etc..' 
                    type="search" 
                    />
                </form>

            }

        </div>
    );
};

export default Search;