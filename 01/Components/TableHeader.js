import React from 'react';

class TableHeader extends React.Component {
    render() {
        return <thead>
            <tr>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
            </tr>
        </thead>
    }
}

export default TableHeader;