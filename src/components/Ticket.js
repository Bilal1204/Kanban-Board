import React, { Fragment } from 'react';
import './Ticket.css';

const Ticket = ({ id, title, tag }) => {
    return (
        <Fragment>
            <div className='ticket'>
                <b>
                <span>{id}</span>
                </b>
                <h2>{title}</h2>
                <p>{tag[0]}</p>
            </div>
        </Fragment>

    );
};

export default Ticket;