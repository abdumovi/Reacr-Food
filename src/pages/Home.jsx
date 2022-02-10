import React from 'react';
import { Main, Right } from '../container';
import { Search, SiteBar } from '../components';
import { GetItem } from '../api/api';
import { HomeContext } from '../contexts/HomeContext';
import './Home.css';

const Home = () => {
    const [search,setSearch] = React.useState('')
    const [select, setSelect] = React.useState(1)
    const [activ, setActiv] = React.useState(1);
    const [allItem, setAllItem] = React.useState([]);
    const [dine, setDine] = React.useState([]);
 
    React.useEffect(() => {
        setAllItem(GetItem(activ));
    }, [activ, allItem])
    return (
        <div className='home__block'>
            <HomeContext.Provider
                value={{ allItem, setAllItem, select, setSelect, dine, setDine ,search ,setSearch}}>
                <div className='home__content'>
                    <Search search text title='Jaegar Resto' />
                    <SiteBar activ={activ} setActiv={setActiv} />
                    <Main home />
                </div>
                <div className='home__order'>
                    <Right home />
                </div>
            </HomeContext.Provider>
        </div>
    )
}
export { Home }
