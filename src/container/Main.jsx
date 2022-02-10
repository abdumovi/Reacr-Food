import React from 'react';
import Card from '../components/Card';
import { HomeContext } from '../contexts/HomeContext';
import './Main.css';

const Main = ({ home }) => {
    const { allItem,setSelect,search} = React.useContext(HomeContext);
    return (
        <div>
            {home &&
                <>
                    <div className='main__block'>
                        <h2 className='main__title'>Choose Dishes</h2>
                        <select onChange={(e)=>setSelect(e.target.value)} className='main__select'>
                            <option value="1">Dine In</option>
                            <option value="2">To Go</option>
                            <option value="3">Delivery</option>
                        </select>
                    </div>
                    <ul className='main__list'>
                        {allItem ? allItem
                        .filter((e)=>(e.foodName.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())))
                        .map((e) => (
                            <Card key={e.id} item={e} />
                        )) : ''}

                    </ul>
                </>
            }

        </div>
    )
}

export { Main }