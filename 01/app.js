import React from 'react';
import { createRoot } from 'react-dom/client';

import Table from './Components/Table';
import data from './data.json';

function App()  {
    return <Table data={ data }/>
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);