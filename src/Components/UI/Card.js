import React from 'react';

import './Card.css';

const Card = (props) => {
    //to support className attribute for built-in HTML Element in our custom component
    const classes = 'card ' + props.className; 
    return <div className={classes}>{props.children}</div>;
};

export default Card;
