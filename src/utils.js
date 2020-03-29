import React from 'react';

export const formatUptime = (value) => {
    const uptimeDays = Math.floor(value / 86400);
    const uptimeHours = Math.floor(value % 86400 / 3600);
    const uptimeMins = Math.floor(value % 86400 % 3600 / 60);
    const uptimeSecs = value % 60;

    let text = '';
    if (uptimeDays >= 1) text += uptimeDays + "d ";
    if (uptimeHours >= 1) text += " " + uptimeHours + "h ";
    if (uptimeMins >= 1) text += " " + uptimeMins + "m ";
    if (uptimeSecs > 1) text += " " + uptimeSecs + "s";

    if (text === '') {
        text = 'n/a';
    }

    return text;
}

export const formatMilliseconds = (value) => {
    return (value / 1000).toFixed(2) + 's';
}

export const formatHeap = (value) => {
    return (value / 1000).toFixed(2) + 'k';
}

export const formatRssi = (value) => {
    return 2 * (value + 100) + '%';
}

export const fillSensors = (sensors, num) => {
    sensors = sensors || [];
    let index = {};

    [...Array(num)].forEach((i, idx) => {
        index[idx + 1] = '?';
    });

    sensors.forEach((item) => {
        index[item.pin] = item.state;
    });

    return Object.keys(index).map((k) => {
        return { pin: k, state: index[k] };
    });
}

export const HostPort = ({ host, port }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={'http://' + host + ':' + port}>{host}:{port}</a>
    );
}

export default {
    formatUptime, formatMilliseconds, formatHeap, formatRssi, fillSensors, HostPort
}
