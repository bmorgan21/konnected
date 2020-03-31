import React from 'react';
import Pin from './pin';
import utils from '../utils';

function CardBoard({ board }) {
    board = board || { mac: 'DATA MISSING' };

    return (
        <div className="card border-primary">
            <h5 className="card-header text-white bg-primary">
                <div className="float-right">
                    {board.t && (<small className="float-right font-weight-normal mt-1">({utils.formatMilliseconds(board.t)})</small>)}
                    {!board.t && (
                        <div className="spinner-grow spinner-grow-sm text-light mr-3" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}
                </div>
                {board.name}

            </h5>
            <div className="card-body">
                <dl className="row mb-0">
                    <dt className="col-sm-4">MAC</dt>
                    <dd className="col-sm-8">{board.mac}</dd>

                    <dt className="col-sm-4">HOST</dt>
                    <dd className="col-sm-8"><utils.HostPort host={board.ip} port={board.port} /></dd>

                    <dt className="col-sm-4">WIFI</dt>
                    <dd className="col-sm-8">{utils.formatRssi(board.rssi)}</dd>

                    <dt className="col-sm-4">UPTIME</dt>
                    <dd className="col-sm-8">{utils.formatUptime(board.uptime)}</dd>

                    <dt className="col-sm-4">FREE</dt>
                    <dd className="col-sm-8">{utils.formatHeap(board.heap)}</dd>
                </dl>
            </div>
            <div className="card-footer">
                {utils.fillSensors(board.sensors, 6).map((pin, i) => (
                    <Pin pin={pin} name={i + 1} key={i} />
                ))}
            </div>
        </div>
    );
}

export default CardBoard;
