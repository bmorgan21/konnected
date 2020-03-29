import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

import CardBoards from './components/card_boards';
import TableBoards from './components/table_boards';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Home({ boards }) {
    const query = useQuery();
    const viewAs = query.get('v') || 'card';

    return (
        <>
            <div className="mb-4 text-right">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        View as {viewAs === 'card' ? 'Card' : 'Table'}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/">Card {viewAs === 'card' && <span className="text-primary">&bull;</span>}</Link>
                        <Link className="dropdown-item" to="/?v=table">Table {viewAs === 'table' && <span className="text-primary">&bull;</span>}</Link>
                    </div>
                </div>
            </div>

            {viewAs === 'card' && <CardBoards boards={boards} />}
            {viewAs === 'table' && <TableBoards boards={boards} />}
        </>
    )
}

export default Home