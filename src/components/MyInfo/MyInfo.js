import React from 'react';
import './MyInfo.css';

const MyInfo = props => {
    return (
        <div className='Infoblock'>
            <a href={props.github}>{props.project} on gitHub</a>
            <p>My number: +996700065566</p>
        </div>
    );
};

export default MyInfo;