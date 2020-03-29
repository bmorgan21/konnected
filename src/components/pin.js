import React from 'react';

const className = (value) => {
    let v = 'info';

    if (value === 0) {
        v = 'success';
    } else if (value === 1) {
        v = 'danger';
    }

    return 'badge badge-pill badge-' + v + ' mr-1';
};


function Pin({ pin }) {
    return (
        <span className={className(pin.state)}>{pin.pin}</span>
    );
}

export default Pin;
