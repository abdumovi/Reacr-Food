import React from 'react';
import './Rigiht.css';
import { HomeContext } from '../contexts/HomeContext';
import OrderCard from '../components/OrderCard';

function Right({ home }) {
    const{select,dine = []} = React.useContext(HomeContext);
    return (
        <div className='Rigiht'>
            {home &&
                <div className='rigiht__order'>
                    <div className='right__order-all order'>
                        <h2 className='order__title'>Orders #34562</h2>
                        <ul className='order__list'>
                            <li className='order__item'>
                                <button className={Number(select) === 1 ? 'order__button order-activ':'order__button'}>Dine In</button>
                            </li>
                            <li className='order__item'>
                                <button className={Number(select) === 2 ? 'order__button order-activ':'order__button'}>To Go</button>
                            </li>
                            <li className='order__item'>
                                <button className={Number(select) === 3 ? 'order__button order-activ':'order__button'}>Delivery</button>
                            </li>
                        </ul>
                        <p className='order__texts'>Item <span>Qty</span><span>Price</span></p>
                        <ul className='order__cards'>
                           {dine.map((e)=>(
                             <OrderCard key={e.id} item={e}/>
                           ))}
                        </ul>
                    </div>
                </div>}
        </div>
    );
}

export default Right;