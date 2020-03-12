import React from 'react';

const infoCard = ({ id, title, thumbnail }) => {
    return (
        <div className='item'>
            <img className='image' src={thumbnail}></img>
            <h3 className='title'>{title}</h3>
        </div>
    )
}
 

export default infoCard;