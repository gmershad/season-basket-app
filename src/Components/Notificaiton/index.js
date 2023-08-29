import React, { useState } from 'react';

const Notification = ({ message }) => {
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false);
    }, 1000);

    return (
        <div
            className={`toast position-fixed ${show ? 'show' : ''}`}
            style={{ top: '20px', right: '20px', minWidth: '200px' }}
        >
            <div className="toast-header">
                <strong className="me-auto">Cart Message</strong>
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    );
};

export default Notification;
