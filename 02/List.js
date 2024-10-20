import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props
    const list = items.map(item => <ListItem item = { item }/>)

    return (
        <ul>
            { list }
        </ul>
    )
}

export default List;
