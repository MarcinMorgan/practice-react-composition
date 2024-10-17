import React from 'react';

class TableFooter extends React.Component {
    render() {
        const total = this.props.total

        return <tfoot>Całkowita kwota do zapłaty: { total.reduce((sum, num) => { return sum + num }, 0) }</tfoot>
    }
}

export default TableFooter;