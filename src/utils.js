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

    const pinMapping = {
        1: 1,
        2: 2,
        5: 3,
        6: 4,
        7: 5,
        9: 6
    };

    Object.keys(pinMapping).forEach((p, idx) => {
        index[p] = '?';
    });

    sensors.forEach((item) => {
        index[item.pin] = item.state;
    });

    let results = Object.keys(index).map((k) => {
        return { pin: k, state: index[k] };
    });

    results.sort((d) => { return d.pin });

    results.forEach((d, idx) => {
        d['name'] = pinMapping[d.pin];
    });

    return results;
}

export const HostPort = ({ host, port }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={'http://' + host + ':' + port}>{host}:{port}</a>
    );
}

export default {
    formatUptime, formatMilliseconds, formatHeap, formatRssi, fillSensors, HostPort
}
