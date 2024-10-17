import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const {data} = this.props;

        return <table>
            <TableHeader/>
            <TableBody data={ data }/>
            <TableFooter/>
        </table>
    }
}

export default Table;