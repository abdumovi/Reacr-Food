import React from 'react';
import './SiteBar.css';
const SiteBar = ({activ,setActiv}) => {
    return (
        <nav className='siteBar'>
            <ul className='siteBar__list'>
                <li
                    onClick={() => setActiv(1)}
                    className={activ === 1 ?'siteBar__item ac-br' : 'siteBar__item'}>
                    Hot Dishes
                </li>
                <li
                    onClick={() => setActiv(2)}
                    className={activ === 2 ?'siteBar__item ac-br' : 'siteBar__item'}>
                    Cold Dishes
                </li>
                <li
                    onClick={() => setActiv(3)}
                    className={activ === 3 ?'siteBar__item ac-br' : 'siteBar__item'}>
                    Soup
                </li>
                <li
                    onClick={() => setActiv(4)}
                    className={activ === 4 ?'siteBar__item ac-br' : 'siteBar__item'}>
                    Grill
                </li>
                <li
                    onClick={() => setActiv(5)}
                    className={activ === 5 ?'siteBar__item ac-br' : 'siteBar__item'}>
                    Appetizer
                </li>
                <li
                    onClick={() => setActiv(6)}
                    className={activ === 6 ?'siteBar__item ac-br' : 'siteBar__item'}>
                    Dessert
                </li>
            </ul>
        </nav>
    );
};

export default SiteBar;