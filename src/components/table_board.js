import React from 'react';
import Pin from './pin';
import utils from '../utils';

function Board({ board }) {
    board = board || { mac: 'DATA MISSING' };

    return (
        <tr>
            <th scope="row">{board.name}</th>
            <td>{board.mac}</td>
            <td><utils.HostPort host={board.ip} port={board.port} /></td>
            <td>{utils.formatMilliseconds(board.t)}</td>
            <td>{utils.formatRssi(board.rssi)}</td>
            <td>{utils.formatUptime(board.uptime)}</td>
            <td>{utils.formatHeap(board.heap)}</td>
            <td>
                {utils.fillSensors(board.sensors, 6).map((pin, i) => (
                    <Pin pin={pin} key={i} />
                ))}
            </td>
        </tr>
    );
}

export default Board;
