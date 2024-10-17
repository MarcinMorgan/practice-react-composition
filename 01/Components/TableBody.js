import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {
    render() {
        const {data} = this.props;
        const list = data.map(item => <TableRow item = { item }></TableRow>)

        return <tbody>
            { list }
        </tbody>
    }
}

export default TableBody;