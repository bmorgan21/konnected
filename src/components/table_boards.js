import React from 'react';
import TableBoard from './table_board';

function TableBoards({ boards, format }) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">mac</th>
                    <th scope="col">host</th>
                    <th scope="col">t</th>
                    <th scope="col">wifi</th>
                    <th scope="col">uptime</th>
                    <th scope="col">free</th>
                    <th scope="col">sensors</th>
                </tr>
            </thead>
            <tbody>
                {boards.map((board, i) => (
                    <TableBoard board={board} key={i} />
                ))}
            </tbody>
        </table>
    );
}

export default TableBoards;
