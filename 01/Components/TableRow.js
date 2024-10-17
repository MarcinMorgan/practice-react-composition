import React from 'react';

class TableRow extends React.Component {
    render() {
        const {item} = this.props

        return <tr>
            <th>{ item.name }</th>
            <th>{ item.price } PLN</th>
            <th>{ item.quantity }</th>
        </tr>
    }
}

export default TableRow;