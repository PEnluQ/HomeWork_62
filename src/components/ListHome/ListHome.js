import React from 'react';
import './ListHome.css';

const ListHome = props => {
    return (
        <div className='block-list'>
            <img className='img' src={props.img} alt='photo'/>
            <h3 className='title'>{props.title}</h3>
            <p className='date'>{props.time} г.</p>
        </div>
    );
};

export default ListHome;